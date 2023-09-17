# Edudev-Learn-and-earn-platform-Dappathon-Season-2

![Group 41](https://github.com/DiveDev21/Edudev-Learn-and-earn-platform-Dappathon-Season-2/assets/85225156/e70d5002-6b33-433e-ab6e-400766722aab)


<h1 align="center"> 
  <img src="https://user-images.githubusercontent.com/85225156/215914335-d9a35b88-99ae-4769-8b1d-3b7e8ca3f993.png" width="35" height="30">
  <span style="color: yellow">Edu.dev MarketPlace</span>
</h1>
<p> <b>In today's digital age, education is changing rapidly. Blockchain technology is playing a big role in this transformation by making education more innovative and transparent. Our project, a Decentralized Application (Dapp), is leading the way in this educational revolution. It offers a new way for course creators to share their knowledge, for learners to find and use courses, and for reviewers to get rewards for their feedback.</b> </p>
<br>

  
## 📋 Table of Contents

- [Introduction](#introduction)
- [Installation](#-setting-up-the-project-locally)
- [The problem it solves](#the-problem-it-solves)
- [Challenges we ran into](#-challenges-we-ran-into)
- [TRACK](#TRACK)
  - [Spheron](#Spheron)
  - [BUNZZ](#BUNZZ)
  - [ROUTER](#Router)
- [Smart Contract](#Smart-Contract)
- [Project Gallery](#Project-Gallery)
- [Technologies we used](#%EF%B8%8Ftechnologies-we-used)
- [Future Improvement](#Future-Improvement)
- [Proof](https://github.com/Vikash-8090-Yadav/SaL--dApp)
  
- [Video Demo](#-video-demo)
- [Contributing](#-contributing)

</div>
<a href="#top">Back to top</a>


 
## 💡Introduction
In today's world, where everything is going digital, education is also changing dramatically. People are constantly seeking new knowledge, and this has sparked a major transformation in the way we learn. One big reason for this change is blockchain technology, which has opened up exciting possibilities for creating transparent and innovative platforms. These platforms are reshaping how courses are not only developed and bought but also how we assign value to them.

Imagine our project as a pioneer in this educational revolution. We've built a special kind of app called a Decentralized Application or Dapp, and it's right at the forefront of this exciting transformation.
 
## 💡Our Vision

Our vision is to create a global ecosystem that democratizes education, making it accessible, affordable, and reliable for everyone. We believe that every individual has the potential to be both a learner and a teacher, and our Dapp is designed to empower them to do so. By harnessing the power of blockchain technology, we aim to remove intermediaries, reduce costs, and enhance trust in the educational marketplace.


### 	▶️ Experience the Live Site by Clicking the Link Below
<br>
<div align="center">
  <table>
    <tr>
      <th>Deployed On</th>
      <th>URL</th>
    </tr>
    <tr>
      <td>Vercel</td>
      <td> https://edudev-learn-and-earn-platform-dappathon-season-2.vercel.app/</td>
    </tr>
    <tr>
      <td>spheron</td>
      <td></td>
    </tr>
  </table>
</div>

<br><br>

## 🚀 Setting up the project locally

To run the Edu.dev locally, follow these steps:
1. Clone the repository:
 ```bash
 git clone https://github.com/DiveDev21/Edudev-Learn-and-earn-platform-Dappathon-Season-2
 ```
 2. Navigate to the project directory:
```bash
cd Edudev-Learn-and-earn-platform-Dappathon-Season-2/Frontend
```
3. Node Re-versioning

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

4. Install the dependencies:
```bash
npm install --legacy-peer-deps
```
5. Start the development server:
```bash
npm run dev
```
6. Access the dApp:
Open your web browser and visit http://localhost:3000 to interact with the EduDev application.

## API Route

A single API Route is responsible for creating a token for file uploads. Make sure to rename .env.example to .env and get your token as mentioned in the [Spheron Browser Upload Docs](https://docs.spheron.network/sdk/browser/).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/upload.ts`.

<br>

## 🔍The problem it solves

The Dapp addresses several critical issues in the realm of education and online course marketplaces, offering innovative solutions to these challenges:

   **Centralized Intermediaries:** Traditional online course platforms often rely on centralized intermediaries, leading to higher fees and potential data privacy concerns. Our Dapp eliminates the need for these intermediaries by leveraging blockchain technology, resulting in lower costs for both creators and learners.

**Limited Access to Quality Content:** Many learners struggle to find high-quality courses that suit their needs and preferences. Our decentralized marketplace democratizes course creation, allowing a diverse range of creators to offer content, thereby expanding access to a wealth of knowledge.

**Trust and Transparency:** Trust is paramount in education, but it's often lacking in online platforms. Blockchain technology ensures transparency and data integrity, as all course-related information and transactions are recorded in an immutable ledger, mitigating concerns about fraudulent or misleading content.

**Incentivizing Reviews:** Encouraging users to provide valuable feedback and reviews can be a challenge. By rewarding reviewers with NFTs, our Dapp incentivizes the community to actively participate in the review process, enhancing the overall quality of the educational offerings.

**Ownership and Control:** Many content creators on centralized platforms have limited control over their content and pricing. Our Dapp empowers creators by allowing them to maintain ownership of their courses and set their own prices, fostering a creator-friendly environment.

**Data Security and Privacy:** Data breaches and privacy concerns are growing issues in the digital age. The Dapp addresses these concerns by securely storing all course-related data on the Spheron SDK, ensuring that user information and transaction history are protected.

**Exclusive NFT Rewards:** Providing NFT rewards for reviewers adds a unique and engaging element to the platform. Users can collect NFTs representing their achievements and contributions, creating a sense of community and value beyond just course content.

<br>

## 💥 Challenges we ran into


<br>

<a href = "#top">Back to top</a>


## TRACK

## Spheron

It is a decentralized application platform (dApp) that allows developers to build, deploy, and scale their web applications on a global network of servers. Spheron aims to make it easier and more affordable for developers to launch their dApps, by providing them with access to a reliable and scalable infrastructure.

Spheron offers a number of features that make it a popular choice for dApp developers, including:

 - Easy deployment: Spheron makes it easy to deploy dApps with a few simple clicks. Developers can simply push their code to Spheron and their dApp will be up and running in minutes.
 - Global reach: Spheron has a global network of servers, which means that dApps deployed on Spheron can be accessed by users from all over the world.
 - Scalability: Spheron is designed to be scalable, so that dApps can handle even the highest traffic loads.
- Affordability: Spheron is very affordable, with pricing that is significantly lower than traditional cloud hosting providers.


For detaailed description of storage sdk please refer this blog [storage SDK](https://docs.spheron.network/sdk/browser/)
Please refer to the official page for a comprehensive explanation of the deployment process. [Spheron deployment](https://docs.spheron.network/static/deployment/logs/)


**In this project we are using Spheron SDK for storing  the metadata and Spheron deployment for deploying our site **

**Browser Upload SDK**


 The Spheron Browser Upload SDK is a JavaScript library that enables seamless uploading of files from the browser to IPFS, Filecoin, or Arweave. This simplifies the process of building decentralized applications (dApps) that             can securely and reliably store and share data. To use the SDK, developers first generate an upload token by creating a server endpoint that utilizes the Spheron Storage SDK. Once the upload token has been created,                      developers can conveniently upload files from their web application. The SDK offers various features to simplify the file-uploading process, including progress tracking, automatic error handling, and the ability to cancel               uploads at any time.

**The below image is the Dapp fontend view where we are using SDK**

![Screenshot from 2023-09-17 18-50-05](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/930f4a6c-1858-4177-9b01-ab540f42585e)

**The below image is the metadata store where all files are uploaded **

![Screenshot from 2023-09-17 17-18-35](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/4812faf6-bf3c-4eb1-9b4e-ecfae7d38fdd)

**Here's the Full metadata stored in the browser SDK**

![Screenshot from 2023-09-17 17-34-41](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/9366c843-63b4-4fc3-9203-6f6761451f5a)

## API Route

A single API Route is responsible for creating a token for file uploads. Make sure to rename .env.example to .env and get your token as mentioned in the [Spheron Browser Upload Docs](https://docs.spheron.network/sdk/browser/).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/upload.ts`.

**Deployment in spheron**

There are two types of deployment available in Spheron.
  - Static site deployment
      - Build your website or web application into a static site. This can be done using a variety of tools and frameworks, such as Hugo, Gatsby, and Next.js.
      - Connect your Git repository to Spheron.
      - Create a new project on Spheron and select the "Static Site" deployment type.
      -  Select the Git repository that contains your static site.
      - Configure the deployment settings. This includes the protocol that you want to use to deploy your static site (IPFS, Filecoin, or Arweave), the domain name that you want to use for your static site, and the HTTPS settings.
      **Deploy your static site.**

        For a detailed explanation you can follow this blog written by me [static deployment](https://omega1.hashnode.dev/deploying-a-web3-application-on-the-spheron#clio55gc706uah7nv5ag13ctt?t=1686289369279)

  - Dynamic deployment using Spheron compute
    
     - We are using API endpoint for storage  browser SDK so that's why we have to move into the dynamic deployment.
    
    For dynamic deployment please follow this blog [Spheron dynamic deploymen](https://blog.spheron.network/deploy-your-nextjs-application-on-spheron-network-with-and-without-apis)
      - Dynamic deployment in the context of the Spheron blog post you linked to refers to the deployment of Next.js applications that use the Spheron Storage SDK to store and retrieve data. This allows developers to build Next.js     
        applications that can dynamically load and display data from decentralized storage networks, such as IPFS, Filecoin, and Arweave.

      - Dynamic deployment on Spheron offers a number of benefits, including:

          -  Decentralization: Dynamically deployed Next.js applications are decentralized, meaning that they are not hosted on any single server. This makes them more resistant to censorship and attack.
          -  Scalability: Dynamically deployed Next.js applications are scalable, meaning that they can be easily scaled to handle high-traffic loads.
          -  Cost-effectiveness: Dynamically deployed Next.js applications are cost-effective, as they are hosted on decentralized storage networks that are typically more cost effective than traditional hosting providers.
       
     
## BUNZZ

 We are  using BUNZZ decipher for smart contract documentation and it's very handy and useful.

Buzz is a comprehensive platform that offers a smart ecosystem for managing and deploying smart contracts. With Bunzz, users can easily find, deploy, and manage reviewed contracts, making the process efficient and hassle-free.
Key Features:
  - Wide Range of Supported Chains: Bunzz supports over 100 chains, including popular ones like Ethereum, Polygon, Avalanche, BSC, and more. This allows users to deploy their contracts on their preferred EVM-compatible chain.
  - AI-Generated Documentation: Bunzz's innovative feature, Bunzz DeCipher, provides AI-generated documentation for contracts. This ensures that users have clear and comprehensive documentation for their contracts, making them easier to understand and work with.
  - Reviewed Contracts from Industry Experts: By using Bunzz, users gain access to a vast library of reviewed contracts created by industry experts. This ensures the reliability and security of the contracts, giving users peace of mind.
  - Simplified Deployment: Bunzz simplifies the deployment process by providing an intuitive user interface. Users can easily deploy their contracts on any EVM chain without the need for extensive technical knowledge.
  - Popular Contract Templates: Bunzz offers a collection of popular contract templates for various use cases, including NFTs, DeFi platforms, ERC20 tokens, and DAOs. These templates serve as a starting point for users, saving them time and effort in contract development.

For a detailed explanation, you can  read this official blog: [Bunzz Decipher](https://blog.bunzz.dev/bunzz-integrates-chatgpt-based-smart-contracts-document-generation-ai-to-launch-decipher/)


Here's the contract address link deployed on Polygon: https://mumbai.polygonscan.com/address/0xF2B8a621d0F517e9F756fDC2E69d2d70eB968174

Here's is the Bunzz decipher AI generated docs for smart contract

![Screenshot from 2023-09-17 18-29-35](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/477b44a4-9298-4b8a-aaf1-dbe3dfa37d49)



## Router

[Router](https://devnet-docs.routerprotocol.com/)

We are not using this in our project due to less time but if someone want to   know about Router then can read this. 

The Router chain is a layer 1 blockchain that leverages tendermint’s Byzantine Fault Tolerant (BFT) consensus engine. As a Proof of Stake (PoS) blockchain, the Router chain is primarily run by a network of validators with economic incentives to act honestly. The Router chain is built using the Cosmos SDK and encapsulates all the features of Cosmos, including fast block times, robust security mechanisms, and, most importantly, CosmWasm - a security-first smart contract platform. By leveraging the CosmWasm toolkit, developers can start building secure blockchain applications on the Router chain from scratch or port their existing applications to the Router chain with minimal overhead.

 ####  In simple term let's suppose you have deployed ur nft or any dapp in polygon network then if any user don't have any matic in their wallet rather they have eth testnet then  with the helps  of router chain network he/she can  min or use the dapp with the eth testnet as well. 

Here's is the full information about how can you build your first dapp using router https://devnet-docs.routerprotocol.com/develop/message-transfer-via-crosstalk/evm-guides/your-first-crosschain-nft-contract


# Smart contract 
 
**We are making an Education Dapp marketplace** I used  Decipher for the documentation, Below if the full description 

### Education Marketplace Smart Contract

## Overview

The Education Marketplace Smart Contract is a blockchain-based solution designed to create, buy, and sell educational courses on the Ethereum blockchain. This document provides a comprehensive overview of the smart contract, its functionality, and key components.

## Table of Contents

- [Understanding Educational Courses](#understanding-educational-courses)
- [Purpose of the Education Marketplace Contract](#purpose-of-the-education-marketplace-contract)
- [Key Components of the Education Marketplace Contract](#key-components-of-the-education-marketplace-contract)

## Understanding Educational Courses

Educational courses in the context of the Education Marketplace are unique digital assets representing various learning materials and programs. Unlike cryptocurrencies like Bitcoin or Ethereum, educational courses are non-fungible, meaning each course is distinct and cannot be exchanged on a one-to-one basis. These courses can cover a wide range of subjects, including online tutorials, skill development programs, academic courses, and more.

## Purpose of the Education Marketplace Contract

The Education Marketplace Contract serves as a decentralized platform for educational content creators and students. Its primary functions are as follows:

1. **Creating Courses:** Educators can mint new educational courses, assign them a unique course ID, and list them for sale in the marketplace.

2. **Listing Courses for Sale:** Educators can list their courses for sale, setting a price in Ether (ETH), the native cryptocurrency of the Ethereum blockchain.

3. **Enrolling in Courses:** Students can enroll in listed courses by sending the specified amount of Ether to the contract. Upon enrollment, they gain access to the course materials, and the course creator is compensated.

## Key Components of the Education Marketplace Contract

The Education Marketplace Contract consists of several key components:

1. **State Variables:** These variables store the contract's current state, including the listing price, contract owner, and mappings linking course IDs to market items.

2. **Structs:** Custom data structures, such as the `MarketItem` struct, group together information about each educational course, including its course ID, creator, owner, price, and whether it has been sold.

3. **Events:** Ethereum events are used to log important activities on the blockchain, such as when a new course is listed for sale.

4. **Functions:** These functions allow users to interact with the contract, including creating courses, listing courses for sale, enrolling in courses, and managing course listings.





# Project Gallery

### Home Page

![Screenshot from 2023-09-17 19-03-01](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/e56025aa-cb95-4fcc-b319-c022b77c88cc)


### Marketplace 

![Screenshot from 2023-09-17 18-59-00](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/0465272b-889c-44bf-944e-4a700514f86d)


### Sell course 

![Screenshot from 2023-09-17 18-50-05](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/be8d1411-fc09-4ed0-b768-ca46fc081018)


### Review course 
![Screenshot from 2023-09-17 18-59-36](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/d174fa72-4329-4dd3-a41f-5ff224078d1f)


### Dashboard 
![Screenshot from 2023-09-17 19-00-13](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/e7c9504e-d670-482a-9e58-0895ce74a828)


### MY course 
![Screenshot from 2023-09-17 19-02-04](https://github.com/DiveDev21/Edudev-Marketplace-Dappathon-Season-2/assets/85225156/bb73f9d7-7cad-4375-a63e-70268d177712)


## 🛠️Technologies we used

[![Next.js](https://img.shields.io/badge/Built_with-Next.js-000000?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Hardhat](https://img.shields.io/badge/Built_with-Hardhat-blue.svg)](https://hardhat.org/)
[![ethers.js](https://img.shields.io/badge/Powered_by-ethers.js-3C3C3D?logo=ethereum)](https://docs.ethers.io/)
[![Polygon](https://img.shields.io/badge/Built_for-Polygon-8247E5?logo=polygon)](https://polygon.technology/)
[![IPFS](https://img.shields.io/badge/Powered_by-IPFS-65C2CB?logo=ipfs)](https://ipfs.io/)
[![Powered by Ethereum](https://img.shields.io/badge/Powered_by-Ethereum-3C3C3D?logo=ethereum)](https://ethereum.org/)

| Technology | Description | URL |
|----------|----------|----------|
| Next Js | JavaScript framework for building server-rendered or statically-generated applications | https://nextjs.org/ |
| Tailwind CSS | Utility-first CSS framework for rapidly building custom designs | https://tailwindcss.com/ |
| Hardhat | Ethereum development environment | https://hardhat.org/ |
| Etherjs | Ethereum JavaScript API | 	https://docs.ethers.org/v5/ |
| Polygon | Polygon (formerly known as Matic Network) is a Layer 2 scaling solution for Ethereum that enables faster and cheaper transactions on the blockchain. It leverages Ethereum as its main backbone while adding its own network of sidechains, allowing for efficient scaling and interoperability with other Ethereum-based systems. | https://polygon.technology/ |
| Ipfs/Filecoin | Decentralized file storage and content distribution | https://ipfs.io/ & https://filecoin.io/ |
| Repl it | Online code editor | https://repl.it/ |
| Ethereum | 	Decentralized blockchain platform for building decentralized applications | https://ethereum.org/ |
</h4>

<be>

## Future improvement

Our Dapp has already introduced an exciting and innovative way for users to create, purchase, and review courses, complete with NFT rewards. As we continue to evolve and enhance our platform, we have some exciting plans for the future:

1. **Dynamic Course Review Section:** We recognize the importance of fostering a dynamic and engaging learning community. In the near future, we aim to implement a dynamic course review section. While it's still in the planning phase due to time constraints, this feature will enable users to share their thoughts, insights, and questions about a course in real-time. This will further enhance the collaborative and interactive learning experience within our platform.

2. **Course Overview:** To provide users with a comprehensive understanding of what a course offers, we will introduce a "Course Overview" feature. Alongside the "Buy" button, there will be an additional "Course Overview" button. By clicking on it, potential buyers can access detailed information about the course, including its objectives, curriculum, and instructor credentials. This will help learners make more informed decisions about their course purchases.

3. **Full Content Blog Integration:** To enrich the educational experience, we are exploring the possibility of integrating a full-content blog section into our Dapp. This blog will serve as a valuable resource, offering additional insights, articles, and supplementary materials related to the courses available on our platform. This content will be seamlessly integrated into our smart contracts, providing users with a wealth of educational resources in one place.

These future improvements align with our commitment to creating an educational ecosystem that is not only decentralized and secure but also dynamic and user-centric. We are dedicated to continuously enhancing the learning experience for our users and expanding the opportunities for both creators and learners within our platform. Stay tuned for these exciting updates as we strive to make education more accessible and engaging for all.


## 🎥 Video Demo


## 🤝 Contributing

Contributions to Algo-Media are always welcome! If you'd like to contribute, please follow these guidelines:
Fork the repository.

Create a new branch for your feature or bug fix:

```
git checkout -b feature/your-feature-name
```
Commit your changes:

```
git commit -m 'Add some feature'
```
Push the branch:

```
git push origin feature/your-feature-name
```
Open a pull request.

We appreciate your contributions and thank you for helping us improve Algo-Media!

<br >
</div>

## Project Contributors



## 🌐 Socials:




## Project Contributor (Member)

<table>
<tr>
<td align="center"><a href="https://github.com/Vikash-8090-Yadav"><img src="https://avatars.githubusercontent.com/u/85225156?s=400&u=3363e9db42792ae40a18b3119c745930bb85cf47&v=4" width=150px height=150px /></a></br> <h4 style="color:red;">Vikash Kumar Yadav</h4>
<a href="https://www.linkedin.com/in/vikash-kumar-yadav-8090/"><img src="https://mpng.subpng.com/20180324/vhe/kisspng-linkedin-computer-icons-logo-social-networking-ser-facebook-5ab6ebfe5f5397.2333748215219374063905.jpg" width="32px" height="32px"></a>
   </td>
  
   <td  align="center"><a href="https://github.com/Mahak008"><img src="https://github.com/Vikash-8090-Yadav/Portfolio_3.0/assets/85225156/ff5c5fbd-9d34-4c22-bb8e-9067500316ae" width=150px height=150px /></a></br> <h4 style="color:red;">Mahak Garg</h4>
<a href="https://linkedin.com/in/mahakgarg/"><img src="https://mpng.subpng.com/20180324/vhe/kisspng-linkedin-computer-icons-logo-social-networking-ser-facebook-5ab6ebfe5f5397.2333748215219374063905.jpg" width="32px" height="32px"></a>


   </td>
  <td  align="center"><a href="https://github.com/ankur0904"><img src="https://avatars.githubusercontent.com/u/98346896?v=4" width=150px height=150px /></a></br> <h4 style="color:red;">Ankur Singh</h4>
<a href="https://linkedin.com/in/ankur-singh-161458227/"><img src="https://mpng.subpng.com/20180324/vhe/kisspng-linkedin-computer-icons-logo-social-networking-ser-facebook-5ab6ebfe5f5397.2333748215219374063905.jpg" width="32px" height="32px"></a>


   </td>
   <td align="center"><a href="https://github.com/Mahak008"><img src="https://avatars.githubusercontent.com/u/93481880?v=4" width=150px height=150px /></a></br> <h4 style="color:red;">Divesh S</h4>
<a href="https://linkedin.com/in/diveshs1078/"><img src="https://mpng.subpng.com/20180324/vhe/kisspng-linkedin-computer-icons-logo-social-networking-ser-facebook-5ab6ebfe5f5397.2333748215219374063905.jpg" width="32px" height="32px"></a>


   </td>

</tr>
</table>


<p align = "center">
Show some ❤️&nbsp; by giving <img src="https://imgur.com/o7ncZFp.jpg" height=25px width=25px> to this repo
</p>
</div>
<a href="#top">Back to top ⬆️</a>
