/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { Expiration, Timestamp, Uint64, AllNftInfoResponse, OwnerOfResponse, Approval, NftInfoResponseForNullable_Empty, Empty, ApprovalResponse, ApprovalsResponse, ContractInfoResponse, ExecuteMsg, Binary, MintMsgForNullable_Empty, InstantiateMsg, MinterResponse, NftInfoResponse, NumTokensResponse, OperatorsResponse, QueryMsgForEmpty, TokensResponse } from "./Cnfts.types";
import { CnftsClient } from "./Cnfts.client";
export interface CnftsExtensionMutation {
  client: CnftsClient;
  msg: {
    msg: Empty;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsExtensionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsExtensionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsExtensionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.extension(msg, fee, memo, funds), options);
}
export interface CnftsBurnMutation {
  client: CnftsClient;
  msg: {
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsBurnMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsBurnMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsBurnMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burn(msg, fee, memo, funds), options);
}
export interface CnftsMintMutation {
  client: CnftsClient;
  msg: MintMsgForNullable_Empty;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsMintMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsMintMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.mint(msg, fee, memo, funds), options);
}
export interface CnftsRevokeAllMutation {
  client: CnftsClient;
  msg: {
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsRevokeAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsRevokeAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsRevokeAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revokeAll(msg, fee, memo, funds), options);
}
export interface CnftsApproveAllMutation {
  client: CnftsClient;
  msg: {
    expires?: Expiration;
    operator: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsApproveAllMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsApproveAllMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsApproveAllMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approveAll(msg, fee, memo, funds), options);
}
export interface CnftsRevokeMutation {
  client: CnftsClient;
  msg: {
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsRevokeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsRevokeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsRevokeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.revoke(msg, fee, memo, funds), options);
}
export interface CnftsApproveMutation {
  client: CnftsClient;
  msg: {
    expires?: Expiration;
    spender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsApproveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsApproveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsApproveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.approve(msg, fee, memo, funds), options);
}
export interface CnftsSendNftMutation {
  client: CnftsClient;
  msg: {
    contract: string;
    msg: Binary;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsSendNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsSendNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsSendNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.sendNft(msg, fee, memo, funds), options);
}
export interface CnftsTransferNftMutation {
  client: CnftsClient;
  msg: {
    recipient: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCnftsTransferNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, CnftsTransferNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, CnftsTransferNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transferNft(msg, fee, memo, funds), options);
}