import { useState, useContext } from 'react';
import CalendarModal from 'components/Calendar/CalendarModal'
import Header from 'components/Header/Header'
import Log from 'components/Log/Log'
import { AppContext } from 'ContextProvider';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import './HabitPage.css'

export default function HabitPage() {
    const [lastLog, setLastLog] = useState(' Never ')
    const [streak, setStreak] = useState(0)
    const [tokenId, setTokenId] = useState();
    const walletAddress = useAccount().address;
    const value = useContext(AppContext);
    const startTx = async () => {
        if (!walletAddress) {
            alert('Please connect your wallet');
            return false;
        }
        const gameAddress = '0x09A1d75c8A5F7f95D08a4653a715A1414692f2E8';
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        //const gasPrice = await provider.getGasPrice();
        const signer = provider.getSigner();
        const gameAbi = [
            {
                'inputs': [],
                'stateMutability': 'payable',
                'type': 'constructor'
            },
            {
                'stateMutability': 'payable',
                'type': 'fallback'
            },
            {
                'inputs': [],
                'name': 'log',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'bool',
                        'name': '_isGood',
                        'type': 'bool'
                    }
                ],
                'name': 'start',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'name': 'tracker',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': 'started',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isGood',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'streak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'longestStreak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'lastLog',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewIsGood',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewLongestStreak',
                'outputs': [
                    {
                        'internalType': 'uint16',
                        'name': '',
                        'type': 'uint16'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'stateMutability': 'payable',
                'type': 'receive'
            }
        ]

        const iface = new ethers.utils.Interface(gameAbi);
        iface.format(ethers.utils.FormatTypes.full);
        const gameContract = new ethers.Contract(gameAddress, iface, provider);
        const gameWithSigner = gameContract.connect(signer);

        try {
            const start = await gameWithSigner.start(false); //isgood pet first time run (and restart losing )
            console.log(start);

            alert("You just started your streak, let's see that streak climb!")

            setStreak(streak + 1);
            setLastLog(Date());

        } catch (err) {
            alert('start function could not run successfully' + err);
            return false;
        }
    }
    const logTx = async () => {
        if (!walletAddress) {
            alert('Please connect your wallet');
            return false;
        }
        const gameAddress = '0x09A1d75c8A5F7f95D08a4653a715A1414692f2E8';
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        //const gasPrice = await provider.getGasPrice();
        const signer = provider.getSigner();
        const gameAbi = [
            {
                'inputs': [],
                'stateMutability': 'payable',
                'type': 'constructor'
            },
            {
                'stateMutability': 'payable',
                'type': 'fallback'
            },
            {
                'inputs': [],
                'name': 'log',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'bool',
                        'name': '_isGood',
                        'type': 'bool'
                    }
                ],
                'name': 'start',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'name': 'tracker',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': 'started',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isGood',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'streak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'longestStreak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'lastLog',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewIsGood',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewLongestStreak',
                'outputs': [
                    {
                        'internalType': 'uint16',
                        'name': '',
                        'type': 'uint16'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'stateMutability': 'payable',
                'type': 'receive'
            }
        ]

        const iface = new ethers.utils.Interface(gameAbi);
        iface.format(ethers.utils.FormatTypes.full);
        const gameContract = new ethers.Contract(gameAddress, iface, provider);
        const gameWithSigner = gameContract.connect(signer);


        try {
            const tracker = await gameContract.tracker(walletAddress);
            if (tracker.started) {
                const log = await gameWithSigner.log();
                await log.wait(1);

                setStreak(streak + 1);
                setLastLog(Date());

                alert(`You have a hot streak of ${streak}, keep up the good work!`)
            } else {
                alert('You have not started a streak yet, press start to commence your journey!');
            }
            
            
        } catch(err) {
            console.log(err)
        }


    }
    const trackTx = async () => {
        if (!walletAddress) {
            alert('Please connect your wallet');
            return false;
        }
        const gameAddress = '0x09A1d75c8A5F7f95D08a4653a715A1414692f2E8';
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const gameAbi = [
            {
                'inputs': [],
                'stateMutability': 'payable',
                'type': 'constructor'
            },
            {
                'stateMutability': 'payable',
                'type': 'fallback'
            },
            {
                'inputs': [],
                'name': 'log',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'bool',
                        'name': '_isGood',
                        'type': 'bool'
                    }
                ],
                'name': 'start',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'name': 'tracker',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': 'started',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isGood',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'streak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'longestStreak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'lastLog',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewIsGood',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewLongestStreak',
                'outputs': [
                    {
                        'internalType': 'uint16',
                        'name': '',
                        'type': 'uint16'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'stateMutability': 'payable',
                'type': 'receive'
            }
        ]

        const iface = new ethers.utils.Interface(gameAbi);
        iface.format(ethers.utils.FormatTypes.full);
        const gameContract = new ethers.Contract(gameAddress, iface, provider);

        try {
            const tracker = await gameContract.tracker(walletAddress);
            console.log(tracker);

            if(tracker.started) {
                alert(`You have ${tracker.isGood ? 'a good' : 'an evil'} pet with a current streak of ${tracker.streak} and a longest streak of ${tracker.longestStreak}`)
            } else {
                alert("You haven't started a streak yet, press start to commence your journey!")
            }

        } catch(err) {
            alert('track function could not run successfully' + err);
            return false;
        }
    }
    const claimTx = async () => {
        if (!walletAddress) {
            alert('Please connect your wallet');
            return false;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const mintAddress = '0x8C0a0533c154B8c8466611CFF9835B2F1F426659';
        const mintAbi = [
            {
                'inputs': [
                    {
                        'internalType': 'address payable',
                        'name': '_habitTracker',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'nonpayable',
                'type': 'constructor'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'approved',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'Approval',
                'type': 'event'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    },
                    {
                        'indexed': false,
                        'internalType': 'bool',
                        'name': 'approved',
                        'type': 'bool'
                    }
                ],
                'name': 'ApprovalForAll',
                'type': 'event'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'Transfer',
                'type': 'event'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'approve',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    }
                ],
                'name': 'balanceOf',
                'outputs': [
                    {
                        'internalType': 'uint256',
                        'name': '',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'claimPet',
                'outputs': [
                    {
                        'internalType': 'uint256',
                        'name': '',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'name': 'first_mint',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'getApproved',
                'outputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'habitTracker',
                'outputs': [
                    {
                        'internalType': 'contract HabitTracker',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    }
                ],
                'name': 'isApprovedForAll',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'name',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'ownerOf',
                'outputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'safeTransferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'data',
                        'type': 'bytes'
                    }
                ],
                'name': 'safeTransferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'approved',
                        'type': 'bool'
                    }
                ],
                'name': 'setApprovalForAll',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'bytes4',
                        'name': 'interfaceId',
                        'type': 'bytes4'
                    }
                ],
                'name': 'supportsInterface',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'symbol',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'tokenURI',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'transferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': '_tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'viewPetType',
                'outputs': [
                    {
                        'internalType': 'enum Pets.PetType',
                        'name': '',
                        'type': 'uint8'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            }
        ];
        const mintiface = new ethers.utils.Interface(mintAbi);
        mintiface.format(ethers.utils.FormatTypes.full);
        const mintContract = new ethers.Contract(mintAddress, mintiface, provider);
        const mintWithSigner = mintContract.connect(signer);
        const gameAddress = '0x09A1d75c8A5F7f95D08a4653a715A1414692f2E8';
        const gameAbi = [
            {
                'inputs': [],
                'stateMutability': 'payable',
                'type': 'constructor'
            },
            {
                'stateMutability': 'payable',
                'type': 'fallback'
            },
            {
                'inputs': [],
                'name': 'log',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'bool',
                        'name': '_isGood',
                        'type': 'bool'
                    }
                ],
                'name': 'start',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'name': 'tracker',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': 'started',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isGood',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'streak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'longestStreak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'lastLog',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewIsGood',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewLongestStreak',
                'outputs': [
                    {
                        'internalType': 'uint16',
                        'name': '',
                        'type': 'uint16'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'stateMutability': 'payable',
                'type': 'receive'
            }
        ]

        const iface = new ethers.utils.Interface(gameAbi);
        iface.format(ethers.utils.FormatTypes.full);
        const gameContract = new ethers.Contract(gameAddress, iface, provider);

        try {
            const tracker = await gameContract.tracker(walletAddress);

            if(tracker.started) {
                const mint = await mintWithSigner.claimPet();
                console.log(mint);
                alert('You just claimed your pet, great work!')
            } else {
                alert("You haven't started a streak yet, press start to commence your journey!")
            }
        } catch(err) {
            alert('track function could not run successfully' + err);
            return false;
        }}
    const balanceTx = async () => {
        if (!walletAddress) {
            alert('Please connect your wallet');
            return false;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const mintAddress = '0x8C0a0533c154B8c8466611CFF9835B2F1F426659';
        const mintAbi = [
            {
                'inputs': [
                    {
                        'internalType': 'address payable',
                        'name': '_habitTracker',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'nonpayable',
                'type': 'constructor'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'approved',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'Approval',
                'type': 'event'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    },
                    {
                        'indexed': false,
                        'internalType': 'bool',
                        'name': 'approved',
                        'type': 'bool'
                    }
                ],
                'name': 'ApprovalForAll',
                'type': 'event'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'Transfer',
                'type': 'event'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'approve',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    }
                ],
                'name': 'balanceOf',
                'outputs': [
                    {
                        'internalType': 'uint256',
                        'name': '',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'claimPet',
                'outputs': [
                    {
                        'internalType': 'uint256',
                        'name': '',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'name': 'first_mint',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'getApproved',
                'outputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'habitTracker',
                'outputs': [
                    {
                        'internalType': 'contract HabitTracker',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    }
                ],
                'name': 'isApprovedForAll',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'name',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'ownerOf',
                'outputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'safeTransferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'data',
                        'type': 'bytes'
                    }
                ],
                'name': 'safeTransferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'approved',
                        'type': 'bool'
                    }
                ],
                'name': 'setApprovalForAll',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'bytes4',
                        'name': 'interfaceId',
                        'type': 'bytes4'
                    }
                ],
                'name': 'supportsInterface',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'symbol',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'tokenURI',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'transferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': '_tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'viewPetType',
                'outputs': [
                    {
                        'internalType': 'enum Pets.PetType',
                        'name': '',
                        'type': 'uint8'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            }
        ];
        const mintiface = new ethers.utils.Interface(mintAbi);
        mintiface.format(ethers.utils.FormatTypes.full);
        const mintContract = new ethers.Contract(mintAddress, mintiface, provider);
        const gameAddress = '0x09A1d75c8A5F7f95D08a4653a715A1414692f2E8';
        const gameAbi = [
            {
                'inputs': [],
                'stateMutability': 'payable',
                'type': 'constructor'
            },
            {
                'stateMutability': 'payable',
                'type': 'fallback'
            },
            {
                'inputs': [],
                'name': 'log',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'bool',
                        'name': '_isGood',
                        'type': 'bool'
                    }
                ],
                'name': 'start',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'name': 'tracker',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': 'started',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'isGood',
                        'type': 'bool'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'streak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint16',
                        'name': 'longestStreak',
                        'type': 'uint16'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'lastLog',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewIsGood',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '_user',
                        'type': 'address'
                    }
                ],
                'name': 'viewLongestStreak',
                'outputs': [
                    {
                        'internalType': 'uint16',
                        'name': '',
                        'type': 'uint16'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'stateMutability': 'payable',
                'type': 'receive'
            }
        ]

        const iface = new ethers.utils.Interface(gameAbi);
        iface.format(ethers.utils.FormatTypes.full);
        const gameContract = new ethers.Contract(gameAddress, iface, provider);

        try {
            const tracker = await gameContract.tracker(walletAddress);

            if(tracker.started) {
                const balanceOf = await mintContract.balanceOf(walletAddress);
                setTokenId(parseInt(balanceOf, 16));
                alert(`You have token ID #${tokenId}`)
            } else {
                alert("You haven't started a streak yet, press start to commence your journey!")
            }
        } catch(err) {
            alert('balance function could not run successfully' + err);
            return false;
        }}
    const petTypeTx = async () => {
        if (!walletAddress) {
            alert('Please connect your wallet');
            return false;
        } else if (!tokenId) {
            alert('Please pull token ID first');
            return false;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const mintAddress = '0x8C0a0533c154B8c8466611CFF9835B2F1F426659';
        const mintAbi = [
            {
                'inputs': [
                    {
                        'internalType': 'address payable',
                        'name': '_habitTracker',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'nonpayable',
                'type': 'constructor'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'approved',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'Approval',
                'type': 'event'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    },
                    {
                        'indexed': false,
                        'internalType': 'bool',
                        'name': 'approved',
                        'type': 'bool'
                    }
                ],
                'name': 'ApprovalForAll',
                'type': 'event'
            },
            {
                'anonymous': false,
                'inputs': [
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'indexed': true,
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'Transfer',
                'type': 'event'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'approve',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    }
                ],
                'name': 'balanceOf',
                'outputs': [
                    {
                        'internalType': 'uint256',
                        'name': '',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'claimPet',
                'outputs': [
                    {
                        'internalType': 'uint256',
                        'name': '',
                        'type': 'uint256'
                    }
                ],
                'stateMutability': 'nonpayable',
                'type': 'function',
                'gas': 20000000
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'name': 'first_mint',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'getApproved',
                'outputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'habitTracker',
                'outputs': [
                    {
                        'internalType': 'contract HabitTracker',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'owner',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    }
                ],
                'name': 'isApprovedForAll',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'name',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'ownerOf',
                'outputs': [
                    {
                        'internalType': 'address',
                        'name': '',
                        'type': 'address'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'safeTransferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'data',
                        'type': 'bytes'
                    }
                ],
                'name': 'safeTransferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'operator',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bool',
                        'name': 'approved',
                        'type': 'bool'
                    }
                ],
                'name': 'setApprovalForAll',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'bytes4',
                        'name': 'interfaceId',
                        'type': 'bytes4'
                    }
                ],
                'name': 'supportsInterface',
                'outputs': [
                    {
                        'internalType': 'bool',
                        'name': '',
                        'type': 'bool'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [],
                'name': 'symbol',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'tokenURI',
                'outputs': [
                    {
                        'internalType': 'string',
                        'name': '',
                        'type': 'string'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'address',
                        'name': 'from',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'to',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'transferFrom',
                'outputs': [],
                'stateMutability': 'nonpayable',
                'type': 'function'
            },
            {
                'inputs': [
                    {
                        'internalType': 'uint256',
                        'name': '_tokenId',
                        'type': 'uint256'
                    }
                ],
                'name': 'viewPetType',
                'outputs': [
                    {
                        'internalType': 'enum Pets.PetType',
                        'name': '',
                        'type': 'uint8'
                    }
                ],
                'stateMutability': 'view',
                'type': 'function'
            }
        ];
        const mintiface = new ethers.utils.Interface(mintAbi);
        mintiface.format(ethers.utils.FormatTypes.full);
        const mintContract = new ethers.Contract(mintAddress, mintiface, provider);
        const petType = await mintContract.viewPetType(tokenId);
        if (petType == 0) {
            alert('Your pet has no type');
        } else if (petType == 1) {
            alert('Your pet is evil');
        } else if (petType == 2) {
            alert('Your pet is good');
        }
    }

    return (
        <div>
            <Header title={'HabiPets'} />
            <h1 className="divCenter">Your {value.habitType} Habit: {value.habitName}</h1>
            <CalendarModal />
            
            <div className="divCenter">
                <button className="habitPageButton"  onClick={startTx}>Start</button>
                <button className="habitPageButton"  onClick={logTx}>Log</button>
                <button className="habitPageButton"  onClick={trackTx}>Track</button>
                <button className="habitPageButton"  onClick={claimTx}>Claim</button>
                <button className="habitPageButton"  onClick={balanceTx}>Get Token Id</button>
                <button className="habitPageButton"  onClick={petTypeTx}>Get Pet Type</button>
            </div>
            <Log streak={streak} lastLog={lastLog} />
        </div>
    )
}
