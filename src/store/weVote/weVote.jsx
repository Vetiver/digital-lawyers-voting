import { WeVoteApi } from "@wavesenterprise/we-vote-api";
export const pollId = 4367; //меняем id голосования и все работает
export const config = {
  backendAddress: "/backendAddress",
  nodeAddress: "/nodeAddress",
  authServiceAddress: "/votingAuthService",
  keysServiceAddress: "/keysAddress",
  transactionFeeAssetId: "5EQ4iE4j4gRT4RvTBEHpkPoDfaeDq277aatEe4LS1Hnv",
};
export const weVoteApi = new WeVoteApi(config);
