import StarsBackground from "@/components/StarsBackground"
import PlasmaEffect from "@/components/PlasmaEffect"
import HaxDrawing from "@/components/HaxDrawing"
import "./page.css"

export default function Page() {
  return (
    <>
      <canvas width={500} height={500} id="box"></canvas>
      <div className="content">
        <ul className="menu-links">
          <li>
            <a href="https://bsky.app/profile/simeng.h4x.no">
              <i className="fa-brands fa-bluesky"></i> simeng.h4x.no
            </a>
          </li>
          <li>
            <a href="https://github.com/simeng">
              <i className="fa-brands fa-github"></i> simeng
            </a>
          </li>
        </ul>
        <StarsBackground width={2000} height={2000} />
        <header>
          <HaxDrawing />
        </header>

        <h1>My page of h4x</h1>
        <p>Hello, I'm Simen and this is my test page of small js h4x</p>
        <h2>Some stuff I've contributed to</h2>
        <ul>
          <li>
            Check out me and my eFriends' pet project{" "}
            <a href="http://turan.no/">turan.no</a>
          </li>
          <li>
            A chess game in{" "}
            <a href="https://github.com/simeng/chessgame">2005-Java</a>
          </li>
          <li>
            #vev @ efnet did some{" "}
            <a href="https://github.com/simeng/smallhtml">smallhtml contribs</a>{" "}
            for TG
          </li>
        </ul>

        <h2>Some stuff I made</h2>
        <ul>
          <li>
            <a href="/html">Div html experiments</a>
          </li>
        </ul>

        <h2>Some stuff I know something about</h2>
        <ul>
          <li>Laravel, Tailwind, React, D3/Visx</li>
          <li>JS, PHP, Bash, CSS</li>
          <li>Postgresql, OpenSearch, Redis, Varnish</li>
          <li>
            GNU/Linux server hosting, the old-fashioned manual way (ansible)
          </li>
        </ul>

        <div
          className="bagger"
          style={{
            clear: "right",
            overflow: "auto",
          }}
        >
          <h2 className="neon">The Bagger 288</h2>
          <PlasmaEffect width={150} height={120} />
          <video
            className="f-right pad-left"
            src="/gw2.webm"
            autoPlay={true}
            loop={true}
            muted
          ></video>
          <p>
            The leaders of the world sat down around a secret table. There was a
            threat to humankind they must defend against. To fight against
            Godzillas they just simply were not able. Doom robots from the
            future could be met with no defence. The leaders of the Germans
            stood with a triumphant roar. "I've got it! We shall build a machine
            that's totally great!" "A massive steel leviathan with blades
            covered in gore!" Beelzebub himself will fear The Bagger 288.
          </p>

          <p>
            The Bagger 288 is there to safeguard all mankind. The Bagger 288
            wreaks total, utter devastation. The Bagger 288 contains an
            artificial mind. This mind is full of hatred violence is its sole
            vocation. This monstrous, murderous machine can never be defeated.
            Its seething wrath and urge for blood are fuled by searing hate. Any
            person who gets in its way is soon to be de-meated. Beelzebub
            himself now fears The Bagger 288!
          </p>
        </div>
      </div>
    </>
  )
}
