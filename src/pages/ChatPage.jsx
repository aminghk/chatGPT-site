import React, {
    useState, useRef, useEffect
} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import SendMessageButton from '../assets/svg/SendMessageButton';
import ChatCard from '../components/ChatCard';
import axios from 'axios'; // Import Axios
import LittleCircleSVG from '../assets/svg/LittleCircleSVG';
import LeftArrowSVG from '../assets/svg/LeftArrowSVG';

const APIKey = 'Bearer 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'

function ChatPage() {
    const [inputMessage, setInputMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const lastMessageRef = useRef(null)

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const addMessageToChat = (role, content) => {
        setChatHistory([...chatHistory, { role, content }]);
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim() === '') return;
        addMessageToChat('user', inputMessage);
        setInputMessage('');
        setIsLoading(true);

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: inputMessage }],
                    temperature: 0.7,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: APIKey, 
                    },
                }
            );

            if (response.status !== 200) {
                throw new Error('Failed to fetch response from the API');
            }

            const responseData = response.data;
            addMessageToChat('assistant', responseData.choices[0].message.content);
        } catch (error) {
            if (error.response && error.response.status === 429) {
                setChatHistory(
                    (chatHistory) =>
                        [
                            ...chatHistory,
                            {
                                role: 'assistant',
                                content:
                                    'You exceeded your current quota, please check your plan and billing details.',
                            },
                        ]
                );
                return;
            }
            console.error('Error sending message:', error);
            addMessageToChat('assistant', 'An error occurred while processing your request.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory]);

    return (
        <div className="flex flex-row w-full bg-black h-screen">
            {/* left side */}
            <div className='flex flex-col w-5/12 relative bg-[#121212] justify-stretch rounded-tl-2xl rounded-bl-2xl overflow-hidden'>

                <div className="flex flex-row items-center justify-start mt-4 ml-4 px-10 py-4 space-x-2 " >
                    <Link className='flex flex-row space-x-2 items-center ' to='/'>
                    <LeftArrowSVG />
                        <text className='text-xl text-reloadCyan font-[SF Pro Display] font-bold'>back</text>
                    </Link>
                </div>

                <div className='flex flex-col  h-2/3 items-center justify-center '>
                    <div className="flex flex-row items-center justify-center ">
                        <text className='text-6xl text-reloadCyan font-[SF Pro Display] font-bold'>AI</text>
                        <text className='text-6xl text-white font-[SF Pro Display] font-bold ml-2'>ChatBot</text>

                    </div>
                    <div className="flex flex-row items-center justify-center ">
                        <text className='text-xl text-center text-white/70 font-[SF Pro Display] '>
                            We’ve trained a model called  <br />ChatGPT which interacts in a  <br />conversational way.
                        </text>
                    </div>
                </div>

                <div className='flex flex-row absolute w-full h-auto top-20'>
                    <LittleCircleSVG />
                </div>

            </div>

            {/* right side */}
            <div className="flex flex-col w-7/12 px-12">
                <div className="flex flex-row items-center justify-start py-4">
                    <Logo />
                </div>
                <div className="h-full  flex flex-col justify-end  ">
                    <div className="flex flex-col items-center  py-4  overflow-y-scroll  max-h-[550px]">
                        {chatHistory.map((message, index) => (
                            <div ref={index === chatHistory.length - 1 ? lastMessageRef : null}>
                                <ChatCard
                                    key={index}
                                    text={message.content}
                                    userName={message.role === 'user' ? 'You' : 'Assistant'}
                                    isSenderGBT={message.role === 'assistant'}
                                    isError={message.role === 'error'}
                                    
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row items-center justify-center py-4">
                        <div className="flex flex-row items-center justify-between bg-[#121212] border-[1px] border-reloadCyan rounded-full w-96 h-16 px-4">
                            <input
                                type="text"
                                className="flex-grow text-lg text-white font-[SF Pro Display] placeholder:text-white bg-transparent border-none outline-none"
                                placeholder="Message..."
                                value={inputMessage}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSendMessage();
                                    }
                                }}
                            />
                            <button
                                className="flex items-center justify-center text-lg text-reloadCyan space-x-2"
                                onClick={handleSendMessage}
                                disabled={isLoading}
                            >
                                <div>

                                    {isLoading ? 'Sending...  ' : 'Send  '}
                                </div>
                                <SendMessageButton />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ChatPage;
