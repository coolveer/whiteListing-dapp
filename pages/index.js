import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { Contract, providers } from "ethers";
import { abi, WHITE_LIST_CONTRACT } from "../constants";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [numOfWhitelisted, setNumOfWhitelisted] = useState(0);
  const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  const [loading, setLoading] = useState(false);
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);
      const { chainId } = await web3Provider.getNetwork();
      if (chainId !== 5) {
        alert("change the network to goerli");
        throw new Error("change the network to goerli");
      }
      if (needSigner) {
        const signer = web3Provider.getSigner();
        return signer;
      }
      return web3Provider;
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfAddressIWHitelisted = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whiteListcontract = new Contract(WHITE_LIST_CONTRACT, abi, signer);
      const address = await signer.getAddress();
      const _joinedWhitelist = await whiteListcontract.whitelistedAddresses(
        address
      );
      setJoinedWhitelist(_joinedWhitelist);
    } catch (error) {
      console.log(error);
    }
  };

  const addAddressToWhiteList = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whiteListcontract = new Contract(WHITE_LIST_CONTRACT, abi, signer);
      const txn = await whiteListcontract.addAddressToWhiteList();
      setLoading(true);
      await txn.wait();
      setLoading(false);
      await getNumberOfWhitelisted();
      setJoinedWhitelist(true);
    } catch (error) {
      console.log(error);
    }
  };

  const renderButton = () => {
    if (walletConnected) {
      if (joinedWhitelist) {
        return <div>Thanks for joining</div>;
      } else if (loading) {
        return <button className={styles.button}>loadinggg.......</button>;
      }
      {
        return (
          <button className={styles.button} onClick={addAddressToWhiteList}>
            Join the whitelist
          </button>
        );
      }
    } else {
      return (
        <button className={styles.button} onClick={connectWallet}>
          connect your wallet
        </button>
      );
    }
  };

  const getNumberOfWhitelisted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const whiteListcontract = new Contract(
        WHITE_LIST_CONTRACT,
        abi,
        provider
      );
      const _noOfWhiteListed = await whiteListcontract.numAddressWhitelisted();
      setNumOfWhitelisted(_noOfWhiteListed);
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
      checkIfAddressIWHitelisted();
      getNumberOfWhitelisted();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disabledInjectedProvider: false,
      });

      connectWallet();
    }
  }, [walletConnected]);

  return (
    <div>
      <Head>
        <title>Whitelist Dapp</title>
        <meta name="description" content="Whitelist Dapp" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>welcome to crypto dev</h1>
          <div className={styles.description}>
            {numOfWhitelisted} have already joind
          </div>
          {renderButton()}
        </div>
        <div>
          <img src="./crypto-devs.svg" className={styles.image} alt="" />
        </div>
      </div>
      <footer className={styles.footer}>Made with ❤️ by crypto dev !</footer>
    </div>
  );
}
