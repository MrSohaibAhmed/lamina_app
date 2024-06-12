import React, { useContext, useEffect, useRef, useState } from "react";
import logoImg from "../../../assets/dashboard/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import userImg from "../../../assets/navbarImg/user-f8beea3763a4782d7f5c91103f0c9df185fc299918645612b3676041dc5b979b.svg";
import logoutImg from "../../../assets/navbarImg/logout-4ab325d57345e54eed9bbecc031b0c11e357293d36575697d05cd5f5779944e6.svg";
import "./InternalNavbar.css";
import usePhantom from "../../hooks/usePhantom";
import { Button } from "react-scroll";
import { searchPair, pairData } from "../../hooks/useWallet";
import KeyContext from "../../../context/walletContext";
import toast, { Toaster } from "react-hot-toast";
// import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as bs58 from "bs58";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const data = [
  {
    pairaddress: "9tz6vYKiBDLYx2RnGWC5tESu4pyVE4jD6Tm56352UGte",
    tokenaddress: "8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB",
    name: "GME ",
  },
  {
    pairaddress: "HZZofxusqKaA9JqaeXW8PtUALRXUwSLLwnt4eBFiyEdC",
    AMC: "9jaZhJM6nMHTo4hY9DGabQ1HNuUWhJtm7js1fmKMVpkN",
    name: "KITTY",
  },
  {
    pairaddress: "Bu4ApwUbcZZspjhyRk8Pn6EsrXByw8fsD7w2hLggn3oe",
    tokenaddress: "9nmkqy4wC5UqCjzUi9YHqE9aNiSgdq58GFxmwfeqzeBZ",
    name: "SOLBET",
  },
  {
    pairaddress: "GH8Ers4yzKR3UKDvgVu8cqJfGzU4cU62mTeg9bcJ7ug6",
    tokenaddress: "5mbK36SZ7J19An8jFochhQS4of8g6BwUjbeCSxBSoWdp",
    name: "michi",
  },
  {
    pairaddress: "7mtJbVNEtejYmCLRriwQhymZdzn4wGRFTvTZ5721b4BD",
    tokenaddress: "HQ7DaoiUxzC2K1Dr7KXRHccNtXvEYgNvoUextXe8dmBh",
    name: "SLOTH",
  },
  {
    pairaddress: "DSUvc5qf5LJHHV5e2tD184ixotSnCnwj7i4jJa4Xsrmt",
    tokenaddress: "ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82",
    name: "BOME",
  },
  {
    pairaddress: "EP2ib6dYdEeqD8MfE2ezHCxX3kP3K2eLKkirfPm5eyMx",
    tokenaddress: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
    name: " $WIF",
  },
  {
    pairaddress: "CwJCznavdHe6AYU85v56nDh1VCWKs3ywcRj8uShXd3F3",
    tokenaddress: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
    name: "GEN AI BOT",
  },
];

const InternalNavbar = () => {
  const { setCoinsKey, setNoDetails, setSolBalance, solBalance } =
    useContext(KeyContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pairAddress, setPairAddress] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const { disconnectFromMetaMask } = usePhantom();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const truncateAddress = (address) => {
    if (!address) return "";
    const start = address.slice(0, 3);
    const end = address.slice(-2);
    return `${start}...${end}`;
  };
  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.success("Successfully copied Wallet Address!");
  };
  useEffect(() => {
    setWalletAddress(localStorage.getItem("publicKey"));
  }, []);
  const handleClick = async (pairAddress) => {
    // ////debugger
    // Check if the clicked pair's pairAddress exists in the data
    // const foundPair = data.find((pair) => pair.pairaddress === pairAddress);
    // if (foundPair) {
    setNoDetails(false);
    setPairAddress(pairAddress);
    // console.log(foundPair);
    const res = await pairData(pairAddress);
    console.log(res?.data, "Response data is = >>>>>>>>>");
    setCoinsKey(res?.data);
    navigate("/dashboard");

    // } else {
    // setNoDetails(true);
    // alert("Sorry We Are Not Dealing with this Pair.");
    // }
  };
  // useEffect(() => {
  //   const fetchPairData = async () => {
  //     try {
  //       // const res = await pairData(
  //       //   "CwJCznavdHe6AYU85v56nDh1VCWKs3ywcRj8uShXd3F3"
  //       // );
  //       const res = await pairData(
  //         "3eoU8s1WtRcgwfy1CWf732fT2HCuFL7HD7j29c6iHnBc"
  //       );
  //       console.log(res?.data, "Response data is = >>>>>>>>>");
  //       setCoinsKey(res?.data);
  //     } catch (error) {
  //       console.error("Error fetching pair data:", error);
  //     }
  //   };

  //   // Call the async function
  //   fetchPairData();
  // }, []); //
  // const toggleDropdown = () => {
  //     setShowDropdown(!showDropdown);
  // };

  const handleSearch = async (e) => {
    // //////debugger
    e.preventDefault();
    // Call the searchPair function with the input parameter
    const response = await searchPair(searchInput);
    const filteredResults = response?.data?.pairs?.filter(
      (pair) => pair.quoteToken.symbol === "SOL"
    );
    console.log("filter data is =>", filteredResults);
    setSearchResults(filteredResults?.slice(0, 5));
    setSearchInput("");
  };
  const quickSearch = async (e) => {
    // //////debugger
    // e.preventDefault();
    // Call the searchPair function with the input parameter
    const response = await searchPair(searchInput);
    const filteredResults = response?.data?.pairs?.filter(
      (pair) => pair.quoteToken.symbol === "SOL"
    );
    console.log("filter data is =>", filteredResults);
    setSearchResults(filteredResults?.slice(0, 5));
    // setSearchInput('');
  };

  useEffect(() => {
    // Function to handle clicks outside of the dropdown
    const handleClickOutside = (event) => {
      // Check if the click is outside of the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Hide the dropdown
        setShowDropdown(false);
      }
    };

    // Add event listener to detect clicks on the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutAccount = () => {
    console.log("clicked");
    disconnectFromMetaMask();
    navigate("/");
  };
  const wihdraw = () => {
    navigate("/transfer-funds")
  }
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(() => {
    pairData("");
  }, []);
  useEffect(() => {
    quickSearch();
  }, [searchInput]);
  const connection = new Connection("https://api.devnet.solana.com");

  // 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8
  // const feePayer = Keypair.fromSecretKey(
  //   bs58.decode(
  //     "588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2"
  //   )
  // );

  // (async () => {
  //   let balance = await connection.getBalance(feePayer.publicKey);
  //   ////debugger;
  //   console.log(`${balance / LAMPORTS_PER_SOL} SOL`);
  // })();
  // const [solBalance, setSolBalance] = useState(0);

  // (async () => {
  //   const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  //   let wallet = new PublicKey(localStorage.getItem("solanaKey"));
  //   console.log(
  //     `${(await connection.getBalance(wallet)) / LAMPORTS_PER_SOL} SOL`
  //   );
  // })();
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
        const connection = new Connection(
          "https://ultra-delicate-lambo.solana-mainnet.quiknode.pro/9e6a18285b47f9974b7cac73e999be568cfe9929/"
        );
        // const walletKey = "9B6ifM6iH71LPNq4U1H3TtMi8Z2fQaq3kv6gF2FVpbqd";
        const walletKey = localStorage.getItem("publicKey");

        if (walletKey) {
          const wallet = new PublicKey(walletKey);
          const balance = await connection.getBalance(wallet);
          setSolBalance(balance / LAMPORTS_PER_SOL);
          console.log(balance / LAMPORTS_PER_SOL, ">>>>>>");
        } else {
          // setError('No wallet address found in local storage.');
        }
      } catch (err) {
        // setError("Error fetching balance: " + err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchBalance();
    const interval = setInterval(fetchBalance, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <nav className="navbar py-3 navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="logo-img" src={logoImg} width="30px" alt="" /> TOPG TRADING
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/new-pairs">
                  NEW PAIRS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">
                  TRENDING
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">
                  HOLDINGS
                </Link>
              </li>
              {/** 
             <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">
                  LEADERBOARD
                </Link>
              </li>
              */}
              <li className="nav-item topnav">
                <div className="search-container d-flex">
                  <form onSubmit={handleSearch}>
                    <input
                      onClick={toggleDropdown}
                      type="text"
                      placeholder="Search by token or LP contract"
                      name="search"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </form>
                  {showDropdown && (
                    <div
                      ref={dropdownRef}
                      className="dropdown-menu position-absolute start-50 translate-middle-x w-30 show "
                      style={{ borderRadius: "15px" }}
                    >
                      {/* Mapping through searchResults and rendering dropdown items */}
                      {searchResults.map((pair, index) => (
                        <div
                          key={index}
                          className="dropdown-item rounded"
                          style={{
                            borderBottom: "1px solid #4d4b5a",
                            cursor: "pointer",
                          }}
                          onClick={() => handleClick(pair.pairAddress)}
                        >
                          <div className="d-flex align-items-center p-3">
                            <div className="">
                              <img
                                className="w-50 rounded mx-auto "
                                src={pair.info?.imageUrl}
                                alt="Pair Image"
                              />
                            </div>

                            <div>
                              <div> {pair.baseToken.name}</div>
                              <div>
                                <span
                                  style={{ fontSize: "12px", color: "white" }}
                                >
                                  pair:{" "}
                                </span>
                                {pair.pairAddress}
                              </div>
                              <div>{pair.dexId}</div>
                              <div> ${pair.priceUsd}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            </ul>
            <ul className="navbar-nav d-content ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a href="https://x.com/TheTateGold" className="btn-nav">
                  Twitter
                </a>{" "}
                /{" "}
                <a href="https://t.me/TheTateGold" className="btn-nav">
                  Telegram
                </a>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active"
                  to="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  onClick={copyAddress}
                  aria-expanded="false"
                >
                  Wallet Address: {truncateAddress(walletAddress)}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white"
                  id="navbarScrollingDropdown"
                  onClick={wihdraw}

                  aria-expanded="false"
                >
                  SOL: {parseFloat(solBalance).toFixed(3)}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={userImg} alt="User" />
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <button className="dropdown-item" onClick={wihdraw}>
                      <img src={logoutImg} alt="Logout" />
                      <span className="px-2">Withdraw</span>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logoutAccount}>
                      <img src={logoutImg} alt="Logout" />
                      <span className="px-2">Logout</span>
                    </button>
                  </li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default InternalNavbar;
