import React from "react";
import { motion } from "motion/react";

const LOG_LINES = [
  "[SYSTEM] INITIALIZING SIGMA_CORE_v2.4...",
  "[AUTH] USER_VERIFIED: ADMIN_SESSION_OPENED",
  "[NETWORK] ESTABLISHING NEURAL_LINK... 100%",
  "[DATABASE] QUERY_FETCH_SUCCESS: 1,204ms",
  "[AI] PROCESSING GPT-SIGMA_LATENCY: 12ms",
  "[SECURITY] FIREWALL_ACTIVE: NO_THREATS_DETECTED",
  "[SYNC] REALTIME_REPLICATION_COMPLETE",
  "[SYSTEM] OPTIMIZING_RESOURCES... SUCCESS",
  "[IOT] EDGE_NODE_49_CONNECTED",
  "[API] WEBHOOK_RECEIVED: INCOMING_DATA_STREAM"
];

export function TechLogs() {
  return (
    <section className="w-full h-12 bg-slate-900 border-y border-slate-800 flex items-center overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...LOG_LINES, ...LOG_LINES, ...LOG_LINES].map((line, i) => (
            <span 
              key={i} 
              className="font-mono text-[10px] tracking-tight text-emerald-500/80 font-medium"
            >
              <span className="text-slate-500 mr-2 opacity-50">[{new Date().toLocaleTimeString()}]</span>
              {line}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
