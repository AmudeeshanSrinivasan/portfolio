"use client";

import { Background, ReactFlow } from "@xyflow/react";
import { architectureEdges, architectureNodes } from "@/lib/portfolio";

export function ArchitectureFlow() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-lg border border-slate-700/40 bg-slate-950/40 sm:h-[420px]">
      <ReactFlow
        nodes={architectureNodes}
        edges={architectureEdges}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="rgba(148, 163, 184, 0.16)" gap={28} size={1} />
      </ReactFlow>
    </div>
  );
}
