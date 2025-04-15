import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';

enum CallStatus {
  INACTIVE = 'iNACTIVE',
  ACTIVE = 'ACTIVE',
  CONNECTING = 'CONNECTING',
  FINISHED = 'FINISHED',
}


const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.FINISHED;
  const isSpeaking = true;
  const messages = [
    'Whats your name?',
    'My name is Satyam Tiwari, nice to meet you !' 
];

const lastMessage = messages[messages.length -1];


  return (
    <>
      <div className='call-view'>
        <div className='card-interviewer'>
          <div className='avatar'>
            <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className="object-cover" />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className='card-border'>
          <div className="card-content">
            <Image src="/user-avatar.png" alt="user avatar" width={540} height={540} className="object-cover rounded-full size-[120px]" />
            <h3>Satyam</h3>
            <h3>{userName}</h3>

          </div>

        </div>
      </div>
      {messages.length > 0 && (
        <div className='transcript-border'>
          <div className='transcript'>
            <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
              {lastMessage}
            </p>

          </div>
        </div>
)}


<div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call" onClick={() => handleCall()}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" onClick={() => handleDisconnect()}>
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;