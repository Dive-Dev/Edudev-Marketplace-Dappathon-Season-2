import { useState } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";


import { upload } from "@spheron/browser-upload";

import { create as IPFSHTTPClient } from 'ipfs-http-client';

const projectId = '2EFZSrxXvWgXDpOsDrr4cQosKcl';
const ProjectSecret = 'b84c6cb2eec9c4536a0b6424ca709f9d';

const auth =
  'Basic ' + Buffer.from(projectId + ':' + ProjectSecret).toString('base64');

const client = IPFSHTTPClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});


import { marketplaceAddress } from '../config';
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

export default function CreateItem() {
// 
// for the sdk

const [uploadLink, setUploadLink] = useState("");
const [dynamicLink, setDynamicLink] = useState("");
const [file, setFile] = useState(null);

  // 
  const [Uploading, setuploading] = useState(false);
	const [uploaded, setuploaded] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' });
  const router = useRouter();

  async function onChange(e) {
    e.preventDefault();
    const file = e.target.files[0];
    try {

    const selectedFile = e.target.files ? file : null;
    setFile(selectedFile);
    setUploadLink("");
    setDynamicLink("");
      




    const response = await fetch("/api/upload");
    
    const responseJson = await response.json();
  
    const uploadResult = await upload([createFile(file)], {
      token: responseJson.uploadToken,
    });
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      }); 
      const url = `https://sal-dapp.infura-ipfs.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }

    

  }

  async function uploadToIPFS() {
		setuploading(true);
    const { name, description, price } = formInput;


    if( !name){
      toast.warn("Asset Name filed is empty");
    }
    else if(description == ""){
      toast.warn("Asset description filed is empty");
    }
    else if(price== ""){
      toast.warn("Price filed is empty");
    }
    else if(uploaded == false){
      toast.warn("Files upload required");
    }
    else if(uploaded == false){
      toast.warn("Files upload required");
    }

  
    // if (!name || !description || !price || !fileUrl) return;
 
    /* first, upload to IPFS */
    
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });

    try {

      const response = await fetch("/api/upload");

      const responseJson = await response.json();
 
      const uploadResult = await upload([createFile(data)], {
        token: responseJson.uploadToken,
      });
   
      // console.log("UploadResult",uploadResult)

      setUploadLink(uploadResult.protocolLink);
      setDynamicLink(uploadResult.dynamicLinks[0]);


      const added = await client.add(data);
      const url =  `https://sal-dapp.infura-ipfs.io/ipfs/${added.path}`;
      // /* after file is uploaded to IPFS, return the URL to use it in the transaction */
 
      // console.log("upres",uploadResult)
      // console.log("dynLInk",DynamicLink)
      
      return url;
    } catch (error) {
      toast.warn("Error uploading image");
      console.log('Error uploading file: ', error);
    }
  
    setuploading(false);
		setuploaded(true);
		 
		toast.success("Files uploaded sucessfully");

  }


  const createFile = (obj) => {
    // Convert object to JSON string
    const json = JSON.stringify(obj);

    // Create Blob from JSON string with MIME type of JSON
    const blob = new Blob([json], { type: "application/json" });

    // Create File from Blob with a filename
    const file = new File([blob], "metadata.json", {
      type: "application/json",
    });

    return file;
  };
  
  async function listNFTForSale(e) {
    e.preventDefault();


    




    const url = await uploadToIPFS();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    /* next, create the item */
    const price = ethers.utils.parseUnits(formInput.price, 'ether');
    let contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contract.createToken(url, price, { value: listingPrice });
    await transaction.wait();
    alert('Successfully created NFT');
    toast.success("Files uploaded sucessfully");
    router.replace('/marketplace');
  }

  return (
    <>
      <div className="min-h-screen py-10 bg-gradient-to-r from-green-700 to-green-300">
        <div className="container mx-auto">
          <div className="flex w-8/12 bg-white flex-col md:flex-row rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="md:w-1/2 bg-black flex flex-col justify-center items-center">
            <h2 className='text-3xl mb-4 text-white'>Add your details</h2>
            <div>
              <p className='text-justify px-4 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className="md:w-1/2 py-10 px-12">
            <p className="mb-3">Sell your course and get paid.</p>
            <form>
              <div className="mt-5">
                <input placeholder="Course Name" className="border-2 border-black rounded p-4 mb-2 w-full" onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}/>
              </div>

              <div className="mt-5">
                <textarea placeholder="Course Description" className="border-2 border-black rounded p-4 mb-2 w-full" onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}/>  
              </div>
              
              <div className="mt-5">
                <input placeholder="Course Price in MATIC" className="border-2 border-black rounded p-4 mb-2 w-full" onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}/>  
              </div>
              
              <div className="mt-5">
							  <label className="block text-sm font-medium text-gray-700 name1">
								  Select Course Image
							  </label>
							  <div className="mt-1 flex items-center border-2 border-black">
								  <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
									  
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    
										  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
									  </svg>
								  </span>
                  
                  <input type="file" name="Asset" className="ml-3 blockw-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:green-700 focus:outline-non "accept="image/*" onChange={onChange}/>
                        
								  {" "}
							  </div>
						  </div>
						
              {Uploading == true ? (
								<button className="button bg-green-600">
									<TailSpin color="#fff" height={20} />
								</button>
							) : uploaded == false ? (
								<button className="rounded-xl bg-green-600 button mt-3" onClick={listNFTForSale}>
								  SELL MY ITEM 
							  </button>
							) : (
								<button style={{ cursor: "no-drop" }} className="button">
									Files uploaded sucessfully
								</button>
							)}
            </form>
          </div>
          </div>
        </div>
      </div>
    
    {/* <div className="flex pr-42 justify-center items-center h-screen">
      <div className="ml-22 add-conatiner">
				<h2 className="bg-cyan-600 bg-gradient-to-r from-indigo-500 rounded-3xl font-extrabold text-white">
					Add my Courses 
				</h2>
				<div className="form-container ">
					<form>
						<div className="inpiut-name ">
            <input
              placeholder="Course  Name"
              className="border rounded p-4 mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
            />
							
              <textarea
              placeholder="Course Description"
              className="border rounded p-4  mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}
            />
							
						</div>
						<div className="inpiut-name">
            <input
              placeholder="Course Price in MATIC"
              className="border rounded p-4 mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
            />
						</div>
						<div className="ml-8">
							<label className="block text-sm font-medium text-gray-700 name1">
								Select Course Image
							</label>
							<div className="mt-1 flex items-center">
								<span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
									<svg
										className="h-full w-full text-gray-300"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
                    
										<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</span>
                <input
              type="file"
              name="Asset"
              className="ml-3 form-control blockw-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non "
              accept="image/*"
              onChange={onChange}
            />
                        
								{" "}
							</div>
						</div>
						
             {Uploading == true ? (
								<button className="button">
									<TailSpin color="#fff" height={20} />
								</button>
							) : uploaded == false ? (
								<button
								className="rounded-xl bg-gradient-to-r from-indigo-500 button"
                onClick={listNFTForSale}
							>
								SELL MY ITEM 
							</button>
							) : (
								<button
									style={{ cursor: "no-drop" }}
									className="button"
								>
									Files uploaded sucessfully
								</button>
							)}
					
					</form>
				</div>
			</div>
    </div> */}
    </>
  );
}