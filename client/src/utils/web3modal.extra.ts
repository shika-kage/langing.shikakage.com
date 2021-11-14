import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import store from "@/store/store";
import {setAccountAddress, setWeb3Instance} from "@/store/actions/user";

export const initializeWeb3Modal = (): Web3Modal => new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions: {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: '67f80e9d6afe4993841594dc4803c958', // 8043bb2cf99347b1bfadfb233c5325c0
            }
        },
    }
});

export const getProvider = async (mw: Web3Modal): Promise<any> => {
    const provider = await mw.connect();

    provider.on("accountsChanged", (accounts: string[]) => location.reload());
    provider.on("chainChanged", (chainId: number) => location.reload());

    provider.on("connect", (info: { chainId: number }) => location.reload());
    provider.on("disconnect", (error: { code: number; message: string }) => location.reload());

    return provider;
}

export const initializeWeb3 = async (provider: any): Promise<any> => new Web3(provider);

export const startConnection = async (): Promise<any> => {
    try {
        const mw: Web3Modal = initializeWeb3Modal();
        const provider = await getProvider(mw);
        const web3Instance = await initializeWeb3(provider);
        const currentAccountAddress = web3Instance.currentProvider.selectedAddress;

        store.dispatch(setAccountAddress(currentAccountAddress));
        store.dispatch(setWeb3Instance(web3Instance));
    } catch (e) {}
};

export const disposeConnection = async (web3Instance: any): Promise<any> => {
    location.reload();
}