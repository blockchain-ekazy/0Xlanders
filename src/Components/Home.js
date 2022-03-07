import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";

import HeadImg from "./Imgs/bìa1.png";
import HeadLeftImg from "./Imgs/OX3L9.png";
import ImgFull from "./Imgs/banner.png";
import ImgA from "./Imgs/Ox3L1.png";
import ImgB from "./Imgs/OX3L3.png";
import ImgC from "./Imgs/OX3L4.png";
import ImgD from "./Imgs/OX3L5.png";

import GifA from "./Imgs/GIF/GIF 1.gif";
import GifB from "./Imgs/GIF/GIF 2.gif";
import GifC from "./Imgs/GIF/GIF 3.gif";

export default function Home() {
  return (
    <div>
      <header class="offcanvas-menu">
        <input type="checkbox" id="toogle-menu" />

        <label for="toogle-menu" class="toogle-open">
          <span></span>
        </label>

        <nav>
          <div>
            <h2 className="text-white">0X3LANDERS</h2>
            {/* <a className="Head" href="#">
              
              0X3LANDERS
            </a> */}
            <label for="toogle-menu" class="text-white toogle-close">
              <span className="text-white"></span>
            </label>
          </div>
          <ul className="LI">
            <li>
              <a href="#H">Home</a>
            </li>
            <li>
              <a href="#A">About </a>
            </li>
            <li>
              <a href="#RD">Road Map </a>
            </li>
            <li>
              <a href="#F">FAQs </a>
            </li>
            <li>
              <a href="#S">Squad </a>
            </li>
            <li>
              <a href="https://twitter.com/0x3LandersV1">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Fade>
        <img src={HeadImg} className="w-100"></img>
      </Fade>
      <a id="H"></a>
      <div className="container-fluid Head">
        <div className="container p-5">
          <div className="row align-items-center">
            <div className="top col-12 col-md-6 text-center">
              <Fade left>
                <h1>OX3Landers</h1>
                <h3 className="pt-5">Minting Dates coming soon</h3>
                <h3>Mintprice 0.01/0.02 Eth.</h3>
                <button className="btn mt-5 MintBtn">
                  {" "}
                  Minting coming Soon
                </button>
              </Fade>
              {/* <i class="fa-brands fa-discord"></i>
                <i class="fa-brands fa-discord"></i>
                <i class="fa-brands fa-discord"></i> */}
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <Fade right>
                <img src={HeadLeftImg} className="w-100"></img>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 DivB">
        <a id="A"></a>
        <div className="row   align-items-center">
          <div className="col-12 col-md-6">
            <Fade left>
              <h1>
                A honest expansion to the existing universe of the Tasty Bones{" "}
              </h1>
            </Fade>
          </div>
          <Fade right>
            <div className="col-12 col-md-6">
              <p>
                Unique Traits within the same universe. Paying hommage does also
                mean adding value to the work that already exists.
              </p>
              <p>
                The current hype around 0x projects tries to make a quick buck.
                We recreate a huge part of the traits with an own flavor, and
                add some spice with own traits. We can't stand behind a
                #nftcollection that gets deleted just after release.
              </p>
            </div>
          </Fade>
        </div>
      </div>

      <div className="container-fluid p-5 DivC">
        <div className="container p-md-5">
          <div className="row p-md-5 p-4 ">
            <Fade top>
              <div className="col">
                <h1>Dont Copy. Expand!</h1>
                <p>
                  The 0xTastyBones collection is based on the original TB
                  collection. Through IPFS the original images can be obtained.
                  We deconstructed each layer from the TB collection manually
                  and reunited them after blacklisting existing combinations.
                  Finished with that we tweaked many Layers and added some new
                  backgrounds to spice it up.
                </p>
              </div>
            </Fade>
          </div>

          <div className="row pl-5 pb-5">
            <Fade right>
              <div className="col-12 col-md-3 ">
                <img src={GifA} className="w-100  "></img>
                <h4 className="pt-4">Deconstruct the Bones</h4>
                <p>
                  The whole TastyBones collection was deconstructed manually to
                  split up the traits. We used IPFS data to break the whole
                  collection down.
                </p>
              </div>

              <div className="col-12 col-md-3">
                <img src={GifC} className="w-100  "></img>
                <h4 className="pt-4">Deconstruct the Bones</h4>
                <p>
                  The whole TastyBones collection was deconstructed manually to
                  split up the traits. We used IPFS data to break the whole
                  collection down.
                </p>
              </div>
            </Fade>
            <Fade left>
              <div className="col-12 col-md-3">
                <img src={GifB} className="w-100  "></img>
                <h4 className="pt-4">Deconstruct the Bones</h4>
                <p>
                  The whole TastyBones collection was deconstructed manually to
                  split up the traits. We used IPFS data to break the whole
                  collection down.
                </p>
              </div>
              <div className="col-12 col-md-3">
                <img src={GifA} className="w-100  "></img>
                <h4 className="pt-4">Deconstruct the Bones</h4>
                <p>
                  The whole TastyBones collection was deconstructed manually to
                  split up the traits. We used IPFS data to break the whole
                  collection down.
                </p>
              </div>
            </Fade>
          </div>

          <div className="row pl-5 py-5">
            <Fade right>
              <div className="col-12 col-md-3">
                <img src={GifA} className="w-100  "></img>
                <h4 className="pt-4">Deconstruct the Bones</h4>
                <p>
                  The whole TastyBones collection was deconstructed manually to
                  split up the traits. We used IPFS data to break the whole
                  collection down.
                </p>
              </div>
              <div className="col-12 col-md-3">
                <img src={GifC} className="w-100  "></img>
                <h4 className="pt-4">Deconstruct the Bones</h4>
                <p>
                  The whole TastyBones collection was deconstructed manually to
                  split up the traits. We used IPFS data to break the whole
                  collection down.
                </p>
              </div>
            </Fade>

            <Fade left>
              <div className="col-12 col-md-3">
                <img src={GifB} className="w-100  "></img>
                <h4 className="pt-4">Deconstruct the Bones</h4>
                <p>
                  The whole TastyBones collection was deconstructed manually to
                  split up the traits. We used IPFS data to break the whole
                  collection down.
                </p>
              </div>
              <div className="col-12 col-md-3">
                <img src={GifA} className="w-100  "></img>
                <h4 className="pt-4">Deconstruct the Bones</h4>
                <p>
                  The whole TastyBones collection was deconstructed manually to
                  split up the traits. We used IPFS data to break the whole
                  collection down.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <a id="RD"></a>

        <div className="row">
          <Fade>
            <div className="col-12 col-md-7">
              <h1> RoadMap</h1>
            </div>
          </Fade>
          <Fade right>
            <div className="col-12 col-md-5">
              <p className="pb-3">
                {" "}
                <span className="font-weight-bold">25% sold:</span> Start
                sending out airdrops of free NFTs for every OG that minted at
                least 1 NFT. Random Airdrop of 1 Eth for one wallet which minted
                10 or more NFTs. Dropping 5 Eth into the community wallet
              </p>
              <p className="pb-3">
                {" "}
                <span className="font-weight-bold">50% sold:</span> Donating 5
                Eth to a charity chosen by community poll.
              </p>
              <p className="pb-3">
                {" "}
                <span className="font-weight-bold">75% sold:</span> Airdropping
                50 Sweatshirt-Token for the first 0xTastyBones merchandise to
                people. Dropping 10 Eth into the community wallet.
              </p>
              <p className="pb-3">
                {" "}
                <span className="font-weight-bold">100% sold:</span>Random
                Airdrop of 10 Eth to 10 wallets (each wallet 1 Eth). Dropping 10
                Eth into community wallet. Airdropping another 50
                Sweatshirt-Token for the first 0xTastyBones merchandise to
                people.
              </p>
            </div>
          </Fade>
        </div>
      </div>

      <div className="container">
        <Fade>
          <img src={ImgFull} className="w-100"></img>
        </Fade>
        <Fade right>
          <div className="row pl-3 pt-5">
            <h5 className="font-weight-bold">
              March 2022 - Merchandise Collection I Release (Wearables)
            </h5>
            <p>
              We open our online shop for our members to accquire 3 different OG
              merchandise products with a supply of 100 pcs. each. The 100 Token
              winners of mint will get access 24 hours before OGs which can get
              access 24 hours before the rest of community.
            </p>
          </div>
        </Fade>

        <Fade left>
          <div className="row pl-3 pt-5">
            <h5 className="font-weight-bold">
              March 2022 - Merchandise Collection I Release (Wearables)
            </h5>
            <p>
              We open our online shop for our members to accquire 3 different OG
              merchandise products with a supply of 100 pcs. each. The 100 Token
              winners of mint will get access 24 hours before OGs which can get
              access 24 hours before the rest of community.
            </p>
          </div>
        </Fade>

        <Fade right>
          <div className="row pl-3 pt-5">
            <h5 className="font-weight-bold">
              March 2022 - Merchandise Collection I Release (Wearables)
            </h5>
            <p>
              We open our online shop for our members to accquire 3 different OG
              merchandise products with a supply of 100 pcs. each. The 100 Token
              winners of mint will get access 24 hours before OGs which can get
              access 24 hours before the rest of community.
            </p>
          </div>
        </Fade>

        <Fade left>
          <div className="row pl-3 pt-5">
            <h5 className="font-weight-bold">
              March 2022 - Merchandise Collection I Release (Wearables)
            </h5>
            <p>
              We open our online shop for our members to accquire 3 different OG
              merchandise products with a supply of 100 pcs. each. The 100 Token
              winners of mint will get access 24 hours before OGs which can get
              access 24 hours before the rest of community.
            </p>
          </div>
        </Fade>

        <Fade right>
          <div className="row pl-3 pt-5">
            <h5 className="font-weight-bold">
              March 2022 - Merchandise Collection I Release (Wearables)
            </h5>
            <p>
              We open our online shop for our members to accquire 3 different OG
              merchandise products with a supply of 100 pcs. each. The 100 Token
              winners of mint will get access 24 hours before OGs which can get
              access 24 hours before the rest of community.
            </p>
          </div>
        </Fade>

        <Fade left>
          <div className="row pl-3 pt-5">
            <h5 className="font-weight-bold">
              March 2022 - Merchandise Collection I Release (Wearables)
            </h5>
            <p>
              We open our online shop for our members to accquire 3 different OG
              merchandise products with a supply of 100 pcs. each. The 100 Token
              winners of mint will get access 24 hours before OGs which can get
              access 24 hours before the rest of community.
            </p>
          </div>
        </Fade>
      </div>

      <div className="container-fluid p-5  DivC">
        <a id="F"></a>

        <div className="container p-md-5 ">
          <div className="row p-md-5 p-4 ">
            <Fade>
              <div className="col-12 text-center">
                <h1>Frequently asked questions</h1>
              </div>
            </Fade>
          </div>

          <div className="row  pb-5 ">
            <Fade left>
              <div className="  col-12 col-md-4 ">
                <div className="Faq mt-3  px-0">
                  <div className="DotBG p-0 ">
                    <div className="pl-3 pt-2 pb-0">•••</div>
                    <hr className="Line "></hr>
                  </div>
                  <div className="pl-4">
                    <h4 className="pt-2">Deconstruct the Bones</h4>
                    <p>
                      The whole TastyBones collection was deconstructed manually
                      to split up the traits. We used IPFS data to break the
                      whole collection down.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade top>
              <div className="  col-12 col-md-4 ">
                <div className="Faq mt-3 px-0">
                  <div className="DotBG p-0 ">
                    <div className="pl-3 pt-2 pb-0">•••</div>
                    <hr className="Line "></hr>
                  </div>
                  <div className="pl-4">
                    <h4 className="pt-2">Deconstruct the Bones</h4>
                    <p>
                      The whole TastyBones collection was deconstructed manually
                      to split up the traits. We used IPFS data to break the
                      whole collection down.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="  col-12 col-md-4 ">
                <div className="Faq mt-3 px-0">
                  <div className="DotBG p-0 ">
                    <div className="pl-3 pt-2 pb-0">•••</div>
                    <hr className="Line "></hr>
                  </div>
                  <div className="pl-4">
                    <h4 className="pt-2">Deconstruct the Bones</h4>
                    <p>
                      The whole TastyBones collection was deconstructed manually
                      to split up the traits. We used IPFS data to break the
                      whole collection down.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="container">
        <a id="S"></a>

        <Fade>
          <h1 className="text-center py-5">The Squad</h1>
        </Fade>

        <div className="row py-5">
          <Fade top>
            <div className="col-12 col-md-3">
              <img src={ImgA} className="ImgSquad w-100"></img>
              <h4 className="text-center ">candyman99</h4>
              <h6 className="text-center ">Development / CEO (SAP)</h6>
            </div>
          </Fade>

          <Fade bottom>
            <div className="col-12 col-md-3">
              <img src={ImgB} className="ImgSquad w-100"></img>
              <h4 className="text-center ">candyman99</h4>
              <h6 className="text-center ">Development / CEO (SAP)</h6>
            </div>
          </Fade>

          <Fade top>
            <div className="col-12 col-md-3">
              <img src={ImgC} className="ImgSquad w-100"></img>
              <h4 className="text-center ">candyman99</h4>
              <h6 className="text-center ">Development / CEO (SAP)</h6>
            </div>
          </Fade>

          <Fade bottom>
            <div className="col-12 col-md-3">
              <img src={ImgD} className="ImgSquad w-100"></img>
              <h4 className="text-center ">candyman99</h4>
              <h6 className="text-center ">Development / CEO (SAP)</h6>
            </div>
          </Fade>
        </div>
      </div>
      <Fade>
        <footer className="">
          &copy; 2022 0X3Landers
          <a href="https://twitter.com/0x3LandersV1">
            <i class="ml-2 fa-brands fa-twitter"></i>
          </a>
          {/* <span>💜</span> */}
          {/* <a href="https://www.linkedin.com/in/saiefalemon">Saief Al Emon</a> */}
        </footer>
      </Fade>
    </div>
  );
}
