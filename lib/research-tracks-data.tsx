import type { ReactNode } from "react"
import { Shield, Lock, FileCheck, Cpu, Feather, FileCode } from "lucide-react"

export interface ResearchTrack {
  id: string
  title: string
  description: string
  icon: ReactNode
  colorClass: string
  progress: number
  lead: string
  leadLink: string
  tags: string[]
  milestones: Milestone[]
  resources: Resource[]
}

export interface Milestone {
  title: string
  completed: boolean
  date?: string
}

export interface Resource {
  title: string
  url: string
  type: "paper" | "code" | "presentation" | "website"
}

export const researchTracksData: ResearchTrack[] = [
  {
    id: "poseidon",
    title: "Poseidon Cryptanalysis Initiative",
    description: "Comprehensively tests the security of the Poseidon hash function through a multi-faceted approach including competitive bounties, targeted research grants, specialized workshops, academic awards, and advanced hardware testing.",
    icon: <Lock className="h-5 w-5" />,
    colorClass: "blue",
    progress: 10,
    lead: "Dmitry Khovratovich",
    leadLink: "https://x.com/Khovr",
    tags: ["Post-Quantum Signatures", "Chain Snarkification"],
    milestones: [
      { title: "Bounties established ($66k already earned)", completed: true, date: "Jan 2025" },
      { title: "Research grants (three recipients chosen)", completed: true, date: "Feb 2025" },
      { title: "First workshop completed", completed: true, date: "Jan 2025" },
      { title: "Additional workshops at encryption conferences", completed: false },
      { title: "Research awards distribution", completed: false },
      { title: "Grobner Basis Exploratory hardware purchase", completed: false },
    ],
    resources: [
      { title: "EF's Poseidon Cryptanalysis Initiative", url: "https://www.poseidon-initiative.info/", type: "website" },
    ],
  },
  {
    id: "hash-based-multi-signatures",
    title: "Hash-Based Multi-Signatures",
    description:
      "Develop hash-based multi-signatures using Winternitz XMSS as a post-quantum replacement for BLS signatures, and optimize key generation time while balancing security and efficiency for varying validator lifetimes.",
    icon: <FileCheck className="h-5 w-5" />,
    colorClass: "green",
    progress: 10,
    lead: "Benedikt Wagner",
    leadLink: "https://benedikt-wagner.dev/",
    tags: ["Post-Quantum Signatures"],
    milestones: [
      { title: "Paper publication", completed: true, date: "Jan 2025" },
      { title: "Signature size below 3 kilobytes", completed: true, date: "Feb 2025" },
      { title: "Verification time below 1 millisecond", completed: true, date: "Feb 2025" },
      { title: "Key generation time reduction", completed: true, date: "Mar 2025" },
      { title: "Reduce Poseidon permutation calls (<200)", completed: true, date: "Mar 2025" },
      { title: "Further optimizations", completed: false },
    ],
    resources: [
      { title: "Hash-Based Multi-Signatures for Post-Quantum Ethereum", url: "https://eprint.iacr.org/2025/055", type: "paper" },
      { title: "Reference implementation in Rust", url: "https://github.com/b-wagn/hash-sig", type: "code" },
    ],
  },
  {
    id: "minimal-zkvm",
    title: "Minimal Zero-Knowledge Virtual Machines",
    description:
      "Explore minimal zero-knowledge virtual machines (zkVMs) specifically optimized for signature aggregation, including various options like Binus M3, SP1, KRU, STU, Jolt, and OpenVM.",
    icon: <Cpu className="h-5 w-5" />,
    colorClass: "amber",
    progress: 10,
    lead: "Thomas Coratger",
    leadLink: "https://x.com/tcoratger",
    tags: ["Chain Snarkification"],
    milestones: [
      { title: "Plonky3 benchmarking (2M Poseidon perm/sec)", completed: true, date: "Feb 2025" },
      { title: "Blake3 implementation (30k ops/sec)", completed: true, date: "Feb 2025" },
      { title: "Keccak implementation (4k ops/sec)", completed: true, date: "Mar 2025" },
      { title: "Starkware's STU performance testing", completed: true, date: "Mar 2025" },
      { title: "Specialized VM for signature aggregation", completed: false },
      { title: "VM options exploration (Binus M3, SP1, KRU, STU, Jolt, OpenVM)", completed: false },
    ],
    resources: [
      { title: "Projects That Shaped Modern zkVMs", url: "https://blog.zksecurity.xyz/posts/zkvm-projects-1/", type: "website" },
      { title: "Jolt and Lasso: A New Approach to Building zkVMs", url: "https://ethresear.ch/t/jolt-and-lasso-a-new-approach-to-building-zkvms/16448", type: "website" },
      { title: "Jolt and Lasso: A New Approach to Building zkVMs — Part 2", url: "https://ethresear.ch/t/jolt-and-lasso-a-new-approach-to-building-zkvm-part-2/17114", type: "website" },
    ],
  },
  {
    id: "falcon-signatures",
    title: "Falcon Signatures",
    description:
      "Exploring lattice-based signatures as an alternative to hash-based signatures for their significantly smaller signatures, potentially allowing Ethereum to support five times more validators.",
    icon: <Feather className="h-5 w-5" />,
    colorClass: "red",
    progress: 10,
    lead: "Josh Beal",
    leadLink: "https://x.com/TheBealDeal",
    tags: ["Post-Quantum Signatures"],
    milestones: [
      { title: "Proposal for Falcon signature aggregation", completed: true, date: "Feb 2025" },
      { title: "Size comparison (600 bytes vs 3 kilobytes)", completed: true, date: "Mar 2025" },
      { title: "Validator capacity analysis", completed: true, date: "Mar 2025" },
      { title: "Combining Falcon signatures with code-based SNARKs", completed: false },
      { title: "Performance testing", completed: false },
    ],
    resources: [
      { title: "Falcon Signatures Website", url: "https://falcon-sign.info/", type: "website" },
      { title: "Falcon Signatures Proposal for Ethereum", url: "https://ethresear.ch/t/falcon-as-an-ethereum-transaction-signature-the-good-the-bad-and-the-gnarly/21512", type: "proposal" },
    ],
  },
  {
    id: "formal-verification",
    title: "Formal Verification",
    description: "Mathematically prove the security properties of cryptographic proof systems like FRI, STU, and WER using the Lean 4 framework, creating structured blueprints that map out theorem dependencies to verify that the post-quantum cryptography implementations are correct.",
    icon: <FileCode className="h-5 w-5" />,
    colorClass: "indigo",
    progress: 10,
    lead: "Alex Hicks",
    leadLink: "https://x.com/alexanderlhicks",
    tags: ["Security Hardening"],
    milestones: [
      { title: "ZKVM formal verification project initiation", completed: true, date: "Jan 2025" },
      { title: "Executable specifications development", completed: true, date: "Feb 2025" },
      { title: "Lean 4 framework implementation", completed: true, date: "Mar 2025" },
      { title: "FRI proof system specification", completed: false },
      { title: "STU proof system specification", completed: false },
      { title: "WER proof system specification", completed: false },
      { title: "Lean Blueprints organization", completed: false },
    ],
    resources: [
      { title: "EF's zkEVM Formal Verification Project", url: "https://verified-zkevm.org/", type: "website" },
      { title: "Formally Verified SNARKs in Lean", url: "https://github.com/Verified-zkEVM/ZKLib", type: "code" },
      { title: "Lean blueprints", url: "https://github.com/PatrickMassot/leanblueprint", type: "code" },
      { title: "zkLib Lean blueprint", url: "https://verified-zkevm.github.io/ZKLib/blueprint/index.html", type: "website" },
      { title: "Proof example in Lean for Improved Polynomial Division in Cryptography", url: "https://tinyurl.com/bdzhf3e3", type: "website" },
    ],
  },
]
