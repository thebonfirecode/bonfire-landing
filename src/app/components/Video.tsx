interface Props {
  videoSource: string,
  style: string
}

const Video = ({videoSource, style} : Props) => {

  return(
    <video width={"100%"} height={"50%"} autoPlay loop muted preload="none" playsInline className={style}>
      <source src={videoSource} type={"video/mp4"} />
      Your browser does not support the video tag.
    </video>
  )
}

export default Video;