import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";



function HappyClient() {
  // Sample data for carousel items
  const carouselItems = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVF7J6qfpUO4wcQc9xbrVFFOxahgazw3SH-g&usqp=CAU",
      name: "Manasa",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdThT7xVoUkw2wevfcFOLqLKF79KLRrf7NdG1TWHyihlJNytX1U1Jt950cx9znAkHE9E0&usqp=CAU",
      name: "Benjamin",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-7Y5DPFzMRjB79DjlzMX49Zrxe2VPaUeuuuavglpiiWs-DfIBxsXnNFfY-JIJJCJlME&usqp=CAU",
      name: "Katie Jones",
    },
    {
      id: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XI9Zq7i-HFHEVXotbYRtSCWtLgHWpeDc_2SuRfV0aYvO2euDMadaPx8-YoQsrxFZqn8&usqp=CAU",
      name: "Suruchi",
    },
    {
      id: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2zOGETgB9Z5r-21ECHj6gYrVhh3_Ydwru-S9wGlZ83HY4lLWl5VStnXd4Io5j7u3QkQ&usqp=CAU",
      name: "Vaishnav",
    },
  ];

  const isSmallScreen = useMediaQuery({ maxWidth: 1450 });

  const carouselSettings = {
    // Customize carousel settings as per your requirement
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: isSmallScreen ? 1 : 3, // Show one item at a time on small screens, three items on larger screens
    autoplay: true,
    autoplaySpeed: 4000, // 4 seconds
  };

  return (
    <>
      <div className="font-lily-script-one text-center p-5 text-white lg:pt-5 pt-20 text-[#000000] text-4xl">
        Happy Client Works
      </div>
      <div className="mt-10 pl-20 pr-20">
        <Slider {...carouselSettings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="px-2">
              <div className="MyDiv rounded-lg bg-gradient-to-b p-[6px] from-[#FB65FE] from-100% to-[#9010FF] to-100%">
                <div className="flex flex-col justify-between h-full bg-white rounded-md p-4">
                  <div className=" ImgDiv rounded-full bg-gradient-to-b p-[4px] from-[#FB65FE] from-100% to-[#9010FF] to-100%">
                    <div className="flex flex-col justify-between h-full bg-white rounded-full p-2">
                      <Image
                        className="flex flex-col justify-between h-full bg-white rounded-full"
                        src={item.imgSrc}
                        width={100}
                        height={100}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                  <div className="font-Inter text-[#000000] text-2xl text-center font-semibold">
                    {item.name}
                  </div>
                  <div className="font-Inter text-[#000000] text-center font-medium text-base">
                    {item.content}
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="bg-[#9010FF] text-[#FFFFFF] text-center font-Inter font-semibold text-base py-4 px-6 rounded-full">
                      Read full on Twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="lg:mt-40 sm:mt-72 mt-40 sm:mb-52 mb-96 lg:mb-20 px-5 lg:px-0">
        <div className="flex w-full flex-wrap relative gap-4 justify-between items-center">
        <img
            src="/About/Bottom/ether.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:top-0 top-[400px] sm:left-[10%] left-[12%] lg:left-0"
            alt="ether"
          />
          <img
            src="/About/Bottom/flutter.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:top-32 top-36 lg:top-0 sm:left-[45%] left-[40%] lg:left-0"
            alt="flutter"
          />
          <img
            src="/About/Bottom/kubernetes.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[25%] left-[15%] top-60 sm:-top-28 lg:top-0 lg:left-0"
            alt="kubernetes"
          />
          <img
            src="/About/Bottom/router.png"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[25%] left-[15%] top-16 lg:top-0 lg:left-0"
            alt="Redux"
          />
          <img
            src="/About/Bottom/spheron.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:top-0 top-[400px] sm:left-[10%] left-[12%] lg:left-0"
            alt="ether"
          />
          <img
            src="/About/Bottom/github.svg"
            className="lg:h-24 h-16 xl:h-32 lg:relative absolute sm:left-[45%] left-[37%] lg:left-0"
            alt="Github"
          />
          <img
            src="/About/Bottom/bunzz.png"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[82%] left-[66%] sm:top-0 top-[400px] lg:left-0"
            alt="react"
          />
          <img
            src="/About/Bottom/vscode.svg"
            className="h-12 lg:relative absolute xl:h-16 left-[66%] lg:left-0 top-16 lg:top-0"
            alt="vs code"
          />
           <img
            src="/About/Bottom/react.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[82%] left-[66%] sm:top-0 top-[400px] lg:left-0"
            alt="react"
          />
          <img
            src="/About/Bottom/polygon.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[45%] left-[40%] lg:left-0 sm:-top-40 top-80 lg:top-0"
            alt="polygon"
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -left-60 -top-[900px] absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: 'rgba(126, 231, 135, 0.3)',
              filter: 'blur(182px)',
            }}
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -right-60 -top-[700px] absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: 'rgba(126, 231, 135, 0.3)',
              filter: 'blur(182px)',
            }}
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -left-60 -top-20 absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: 'rgba(126, 231, 135, 0.3)',
              filter: 'blur(182px)',
            }}
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -right-60 -top-20 absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: 'rgba(126, 231, 135, 0.2)',
              filter: 'blur(182px)',
            }}
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default HappyClient;
