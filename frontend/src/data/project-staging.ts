export interface ProjectStagingConfig {
  progress: number;
  statusLabel: string;
  activeStage: 1 | 2 | 3 | 4; // 1: BUILD, 2: TEST, 3: DEPLOY, 4: LAUNCH
  stageSublabels: [string, string, string, string];
  description: string;
  badgeText: string;
}

export const projectStagingData: Record<string, ProjectStagingConfig> = {
  "taskflow": {
    progress: 38,
    statusLabel: "TESTING WEBSOCKET ENGINES...",
    activeStage: 2,
    stageSublabels: ["COMPLETE", "IN PROGRESS", "PENDING", "SOON"],
    description:
      "The dedicated collaborative workspace sandbox for TASKFLOW is currently executing integration tests for real-time WebSocket state synchronizers and Redis event queues.",
    badgeText: "STAGE 2 / INTEGRATION SUITE",
  },
  "ecommerce": {
    progress: 29,
    statusLabel: "VALIDATING CHECKOUT SUITE...",
    activeStage: 2,
    stageSublabels: ["COMPLETE", "IN PROGRESS", "PENDING", "SOON"],
    description:
      "The modern skincare storefront sandbox for E-COMMERCE is currently running automated end-to-end checkout validation, Stripe sandbox webhooks, and cart persistence tests.",
    badgeText: "STAGE 2 / QA & SECURITY",
  },
  "ai-chatbot": {
    progress: 44,
    statusLabel: "BENCHMARKING MODEL LATENCY...",
    activeStage: 2,
    stageSublabels: ["COMPLETE", "IN PROGRESS", "PENDING", "SOON"],
    description:
      "The neural conversational sandbox for AI CHATBOT is currently benchmarking token streaming latency, context window memory buffers, and inference error fallbacks.",
    badgeText: "STAGE 2 / MODEL BENCHMARKING",
  },
  "cryptovault": {
    progress: 34,
    statusLabel: "AUDITING SMART CONTRACTS...",
    activeStage: 2,
    stageSublabels: ["COMPLETE", "IN PROGRESS", "PENDING", "SOON"],
    description:
      "The decentralized crypto terminal sandbox for CRYPTOVAULT is currently undergoing local testnet simulation, signature verification auditing, and mock transaction testing.",
    badgeText: "STAGE 2 / SECURITY AUDIT",
  },
  "skycast-weather": {
    progress: 47,
    statusLabel: "CALIBRATING DOPPLER STREAMS...",
    activeStage: 2,
    stageSublabels: ["COMPLETE", "IN PROGRESS", "PENDING", "SOON"],
    description:
      "The hyper-local forecasting sandbox for SKYCAST WEATHER is currently verifying mock satellite telemetry endpoints and stress-testing Doppler radar rendering performance.",
    badgeText: "STAGE 2 / TELEMETRY TESTING",
  },
  "zenith-luxury": {
    progress: 22,
    statusLabel: "COMPILING 3D SHADERS...",
    activeStage: 1,
    stageSublabels: ["IN PROGRESS", "QUEUED", "PENDING", "SOON"],
    description:
      "The curated streetwear boutique sandbox for ZENITH LUXURY is currently compiling WebGL 3D sneaker meshes, dynamic specular lighting shaders, and asset pipeline packs.",
    badgeText: "STAGE 1 / 3D ARCHITECTURE",
  },
  "devstudio-cloud": {
    progress: 31,
    statusLabel: "PROFILING RUNNER CONTAINERS...",
    activeStage: 2,
    stageSublabels: ["COMPLETE", "IN PROGRESS", "PENDING", "SOON"],
    description:
      "The cloud-based code workspace sandbox for DEVSTUDIO CLOUD is currently testing container startup speeds, collaborative cursor synchronization, and terminal stream integrity.",
    badgeText: "STAGE 2 / CONTAINER TESTING",
  },
};

export const defaultStagingConfig: ProjectStagingConfig = {
  progress: 35,
  statusLabel: "TESTING MODULES...",
  activeStage: 2,
  stageSublabels: ["COMPLETE", "IN PROGRESS", "PENDING", "SOON"],
  description:
    "The dedicated live demo sandbox is currently undergoing development and testing phases. It will be launched once all quality gates pass!",
  badgeText: "STAGE 2 / QUALITY AUDIT",
};
