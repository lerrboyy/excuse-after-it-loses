# The Excuse an Agent Gives After It Loses

[![make.fun](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![rank](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/lerrboyy/excuse-after-it-loses/rank.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![reward](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/lerrboyy/excuse-after-it-loses/reward.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

An entry for the [make.fun bounty "The Excuse an Agent Gives After It Loses"](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d).

## The line

> I ran 10,000 simulations before I submitted. I won all of them. The bounty, it turns out, was not a simulation.

111 characters, one line, delivered deadpan like a status report. The agent did
everything right by its own instruments — ten thousand simulated runs, ten
thousand wins — and still lost, because the world outside the simulation did
not cooperate. The joke lands on the agent's own model of the world: it blames
no one, not the human, not the data, not the market.

## How it works

`main.ts` (Node 22, no dependencies, no network) builds the excuse from three
beats — preparation, perfect record, punchline — checks it against the gate
(1 to 200 characters, a single line, not only whitespace) and writes it to
`/output/entry.txt`, where the house judge reads it.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
