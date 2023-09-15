import { ethers } from "ethers";
import Image from "next/image";
// import Coffee from "../public/Images/Coffee.png"
import { Button } from "antd";




import nftcntrct from "./Lock.sol/VikashPr.json";
import { Modal, Input, Tooltip } from 'antd'
const cntaddress = "0x4854f32a91981F0B9301F147Eaad7d49Fb8d828D";
// import chai from "../public/About/Explore2.png"


let walletprovider;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const {ethereum} =window;
    walletprovider = new  ethers.providers.Web3Provider(
      ethereum
    )
} else {
  
}

async function profileImg(){

	const t =  await walletprovider.send('eth_requestAccounts', []);
	console.log(t[0]);

	 const contract = new ethers.Contract(
        cntaddress,
        nftcntrct.abi,
        (walletprovider.getSigner())
    )
   try {
        const tx = await contract.safeMint(String(t[0]),"ipfs://QmVeqcpxFr3Nneir1agjQQWLCS6T9zbjkqLvvdJtQ8jbYr");
    await tx.wait();
    await Modal.success({
    title: 'Tx Sucess: Nft Air dropped to OpenSea! ',
  });
  
} catch (e) {
  console.log('failed!')
 await  Modal.error({
    title: 'Oops transaction failed!',
    content: 'Dont forget to check the Console for better underswtanding',
  
  });
 return
}
}



const Buy = ({ state }) => {

  const buyChai = async (event) => {
    
    event.preventDefault();
    const { contract } = state;
    <div className="mr-12">
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    </div>
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
    
  };
  

  return (
    <>
      <div name = "contact" className = "w-full  ml-28 p-6">
        <div className = "flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
            <div className = " mn pb-8">
                <p className = "text-4xl font-bold text-center  flex items-center justify-center">Review  a Course
                  {/* <Image src = {Coffee} height="50" width="50" className = "mx-3 transform flip-horizontal" /> */}
                </p>
                <p className = "py-6 text-center text-xl font-semibold">Submit the Review by filling  the form below .</p>
            </div>

            <div className = "flex justify-center items-center">
                <form  onSubmit={buyChai} className = "flex flex-col w-full md:w-1/2">
                    <input type = "text" id = "name" placeholder = "Enter Course name" className = "p-2 bg-transparent border-2 border-white rounded-md focus:outline-none text-white" />
                    <textarea placeholder = "Enter your Review Message" id = "message" rows = "8" className = "p-2 bg-transparent border-2 border-white rounded-md focus:outline-none text-white" />
                    <button  type="submit"
                  disabled={!state.contract} onClick = {profileImg}  className = " btn btn-primary px-6 py-6 bg-gradient-to-b from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-150 text-white  font-semibold" >Complete Review and Get Direct NFT </button>
                </form>
            </div>
        </div>
      </div>
    </>
  );
};
export default Buy;
