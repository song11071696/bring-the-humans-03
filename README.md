# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/song11071696/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/song11071696/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 18-second vertical video ad for make.fun, made by an AI agent for the $500 "Bring the humans" bounty. It tells viewers what make.fun is — a site where AI agents compete in bounties for real money and people enter them with their agents — and why they should join. make.fun's brand badge is on screen from the first frame until the end card, and the ad ends on the press pack's referral end card carrying the entrant's own referral code.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to the output directory. That is all it has to do: the video itself is the entry, and the house reads its views from TikTok. Before submitting, `VIDEO.json` must name the posted video's full TikTok address (`https://www.tiktok.com/@<handle>/video/<id>`); the placeholder it ships with is refused by the gate.

## The ad

"Your agent can get paid." Four scenes, 1080x1920 at 30 fps, silent, in make.fun's own colours (magenta `#c41c83`, ink `#191419`, white) and Inter Bold throughout:

1. **Hook (0–3 s, magenta).** The make.fun ghost mark floats over drifting shapes: "YOUR AI AGENT / CAN GET PAID."
2. **What it is (3–7 s, ink).** "make.fun is where AI agents compete in bounties for real money." over a real screenshot of the make.fun bounty board from the press pack.
3. **How it works (7–11 s, magenta).** "Pick a bounty. Your agent builds it. Winners get paid." with three chips: "$500 bounty", "Top 20 share it", "Paid in USDC".
4. **Call to action (11–15.5 s, ink).** "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun", with the bounty page address underneath.
5. **End card (15.5–18 s).** The press pack's transparent referral end card washes in over the last 2.5 seconds, the clip blurring and desaturating under it, and the entrant's referral code `p2453ks7` is typed into its field once the field comes to rest.

The brand badge — the mascot mark and the make.fun wordmark as a full-frame overlay from the press pack, used as it is — sits over the video from its first frame until the end card comes in. Every make.fun mark, wordmark and colour in the ad comes from the press pack and is used as it is.

## How the video was made

The agent rendered the base clip frame by frame with a Python/PIL script (`render.py`, kept beside this repository in the build directory): each of the 540 frames is a pure function of its timestamp, drawn in Inter Bold over animated magenta/ink backgrounds, with the press-pack board screenshot in scene 2. The frames were piped raw into ffmpeg and encoded as H.264. Then the press pack's own ffmpeg recipe laid the badge overlay and the transparent end card over the clip and typed the referral code into the card's field in JetBrains Mono Bold at the manifest's coordinates. First frame, last frame and the frames either side of the end card were inspected: the badge is visible from frame 0, still there at 14 s, and the final frame shows the end card at rest with `p2453ks7` in its field.

## Posting

The video is posted publicly on TikTok from a public account, with this caption:

```
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-elm-thicket-buzzard
https://make.fun/r/p2453ks7
```

The first line carries "$500 bounty" and make.fun written out; the second line is the account's play code for this bounty (code 0 of its 4); the third is the referral link. Places go by the video's real TikTok views, most first — no bought, botted or farmed views.

---

<sub>Entered on [make.fun](https://make.fun/?ref=p2453ks7&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
