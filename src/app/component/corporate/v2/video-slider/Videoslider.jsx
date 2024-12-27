'use client';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import './videoslider.css';
const hightlightsSlides = [
    {
        id: 1,
        textLists: ["Enter A17 Pro.", "Game‑changing chip.", "Groundbreaking performance."],
        video: '/video/highlight-first.mp4',
        videoDuration: 4,
    },
    {
        id: 2,
        textLists: ["Titanium.", "So strong. So light. So Pro."],
        video: '/video/hightlight-sec.mp4',
        videoDuration: 5,
    },
    {
        id: 3,
        textLists: ["iPhone 15 Pro Max has the", "longest optical zoom in", "iPhone ever. Far out."],
        video: '/video/hightlight-third.mp4',
        videoDuration: 2,
    },
    {
        id: 4,
        textLists: ["All-new Action button.", "What will yours do?."],
        video: '/video/hightlight-fourth.mp4',
        videoDuration: 3.63,
    },
];
const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });
    const [loadedData, setLoadedData] = useState([]);
    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;
    useEffect(() => {
        gsap.to('#slider', {
            transform: `translateX(${-100 * videoId}%)`,
            duration: 2,
            ease: 'power2.inOut',
        });
    }, [videoId]);
    useEffect(() => {
        if (loadedData.length > 3) {
            if (!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]);
    const handleLoadedMetadata = (i, e) =>
        setLoadedData((prevVideo) => [...prevVideo, e]);
    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;
        if (span[videoId]) {
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100);
                    if (progress !== currentProgress) {
                        currentProgress = progress;
                        gsap.to(videoDivRef.current[videoId], {
                            width:
                                window.innerWidth < 760
                                    ? '10vw'
                                    : window.innerWidth < 1200
                                        ? '10vw'
                                        : '4vw',
                        });
                        gsap.to(span[videoId], {
                            width: `${currentProgress}%`,
                            backgroundColor: 'white',
                        });
                    }
                },
                onComplete: () => {
                    if (isPlaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: '12px',
                        });
                        gsap.to(span[videoId], {
                            backgroundColor: '#AFAFAF',
                        });
                    }
                },
            });
            if (videoId === 0) {
                anim.restart();
            }
            const animUpdate = () => {
                anim.progress(
                    videoRef.current[videoId].currentTime /
                    hightlightsSlides[videoId].videoDuration
                );
            };
            if (isPlaying) {
                gsap.ticker.add(animUpdate);
            } else {
                gsap.ticker.remove(animUpdate);
            }
        }
    }, [videoId, startPlay, isPlaying]);
    const handleProcess = (type, i) => {
        switch (type) {
            case 'video-end':
                setVideo((prevVideo) => ({
                    ...prevVideo,
                    isEnd: true,
                    videoId: i + 1,
                }));
                break;
            case 'video-last':
                setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: true }));
                break;
            case 'video-reset':
                setVideo((prevVideo) => ({
                    ...prevVideo,
                    isEnd: false,
                    isLastVideo: false,
                    videoId: 0,
                }));
                break;
            case 'play':
            case 'pause':
                setVideo((prevVideo) => ({
                    ...prevVideo,
                    isPlaying: !prevVideo.isPlaying,
                }));
                break;
            default:
                return video;
        }
    };
    return (
        <>
            <section className="d-flex align-items-center overflow-hidden bg-black">
                {hightlightsSlides.map((list, i) => (
                    <article
                        key={list.id}
                        id="slider"
                        className="pr-md-4 pr-2"
                        style={{ transition: 'transform 0.3s ease' }}
                    >
                        <div className="video-carousel-container position-relative">
                            <figure className="w-100 h-100 d-flex justify-content-center align-items-center rounded overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline
                                    preload="auto"
                                    muted
                                    className={`${list.id === 2 && 'translate-x-44'} pointer-events-none`}
                                    ref={(el) => (videoRef.current[i] = el)}
                                    onEnded={() =>
                                        i !== 3
                                            ? handleProcess('video-end', i)
                                            : handleProcess('video-last')
                                    }
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo,
                                            isPlaying: true,
                                        }));
                                    }}
                                    onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </figure>
                            <figcaption className="position-absolute top-3 left-3 z-10">
                                {list.textLists.map((text) => (
                                    <p key={text} className="h5 font-weight-medium">
                                        {text}
                                    </p>
                                ))}
                            </figcaption>
                        </div>
                    </article>
                ))}
            </section>
            <div className="position-relative d-flex justify-content-center mt-3">
                <div className="d-flex py-2 px-3 bg-light backdrop-blur rounded-pill">
                    {videoRef.current.map((_, i) => (
                        <span
                            key={i}
                            className="mx-1 w-3 h-3 bg-secondary rounded-circle position-relative cursor-pointer"
                            ref={(el) => (videoDivRef.current[i] = el)}
                        >
                            <span
                                className="position-absolute h-100 w-100 rounded-circle"
                                ref={(el) => (videoSpanRef.current[i] = el)}
                            />
                        </span>
                    ))}
                </div>
                <button className="control-btn btn btn-light ml-3 p-3 rounded-pill">
                    <img
                        src={isLastVideo ? './images/replay.svg' : !isPlaying ? './images/play.svg' : './images/pause.svg'}
                        alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
                        onClick={
                            isLastVideo
                                ? () => handleProcess('video-reset')
                                : !isPlaying
                                    ? () => handleProcess('play')
                                    : () => handleProcess('pause')
                        }
                    />
                </button>
            </div>
        </>
    );
};
export default VideoCarousel;