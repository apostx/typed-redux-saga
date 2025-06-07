/* This file is generated. Do not edit it. */

/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable functional/functional-parameters */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */


import {
  
  take as rawTake,
  takeMaybe as rawTakeMaybe,
  takeEvery as rawTakeEvery,
  takeLatest as rawTakeLatest,
  takeLeading as rawTakeLeading,
  put as rawPut,
  putResolve as rawPutResolve,
  call as rawCall,
  apply as rawApply,
  cps as rawCps,
  fork as rawFork,
  spawn as rawSpawn,
  join as rawJoin,
  cancel as rawCancel,
  select as rawSelect,
  actionChannel as rawActionChannel,
  flush as rawFlush,
  cancelled as rawCancelled,
  setContext as rawSetContext,
  getContext as rawGetContext,
  delay as rawDelay,
  throttle as rawThrottle,
  debounce as rawDebounce,
  retry as rawRetry,
  
  all as rawAll,
  race as rawRace,
} from "redux-saga/effects";

function* wrapEffect(effect, ...args) {
  return yield effect(...args);
}

export function take(...args) {
  const effect = wrapEffect(rawTake, ...args);
  effect.isWrapped = true;
  return effect;
}

export function takeMaybe(...args) {
  const effect = wrapEffect(rawTakeMaybe, ...args);
  effect.isWrapped = true;
  return effect;
}

export function takeEvery(...args) {
  const effect = wrapEffect(rawTakeEvery, ...args);
  effect.isWrapped = true;
  return effect;
}

export function takeLatest(...args) {
  const effect = wrapEffect(rawTakeLatest, ...args);
  effect.isWrapped = true;
  return effect;
}

export function takeLeading(...args) {
  const effect = wrapEffect(rawTakeLeading, ...args);
  effect.isWrapped = true;
  return effect;
}

export function put(...args) {
  const effect = wrapEffect(rawPut, ...args);
  effect.isWrapped = true;
  return effect;
}

export function putResolve(...args) {
  const effect = wrapEffect(rawPutResolve, ...args);
  effect.isWrapped = true;
  return effect;
}

export function call(...args) {
  const effect = wrapEffect(rawCall, ...args);
  effect.isWrapped = true;
  return effect;
}

export function apply(...args) {
  const effect = wrapEffect(rawApply, ...args);
  effect.isWrapped = true;
  return effect;
}

export function cps(...args) {
  const effect = wrapEffect(rawCps, ...args);
  effect.isWrapped = true;
  return effect;
}

export function fork(...args) {
  const effect = wrapEffect(rawFork, ...args);
  effect.isWrapped = true;
  return effect;
}

export function spawn(...args) {
  const effect = wrapEffect(rawSpawn, ...args);
  effect.isWrapped = true;
  return effect;
}

export function join(...args) {
  const effect = wrapEffect(rawJoin, ...args);
  effect.isWrapped = true;
  return effect;
}

export function cancel(...args) {
  const effect = wrapEffect(rawCancel, ...args);
  effect.isWrapped = true;
  return effect;
}

export function select(...args) {
  const effect = wrapEffect(rawSelect, ...args);
  effect.isWrapped = true;
  return effect;
}

export function actionChannel(...args) {
  const effect = wrapEffect(rawActionChannel, ...args);
  effect.isWrapped = true;
  return effect;
}

export function flush(...args) {
  const effect = wrapEffect(rawFlush, ...args);
  effect.isWrapped = true;
  return effect;
}

export function cancelled(...args) {
  const effect = wrapEffect(rawCancelled, ...args);
  effect.isWrapped = true;
  return effect;
}

export function setContext(...args) {
  const effect = wrapEffect(rawSetContext, ...args);
  effect.isWrapped = true;
  return effect;
}

export function getContext(...args) {
  const effect = wrapEffect(rawGetContext, ...args);
  effect.isWrapped = true;
  return effect;
}

export function delay(...args) {
  const effect = wrapEffect(rawDelay, ...args);
  effect.isWrapped = true;
  return effect;
}

export function throttle(...args) {
  const effect = wrapEffect(rawThrottle, ...args);
  effect.isWrapped = true;
  return effect;
}

export function debounce(...args) {
  const effect = wrapEffect(rawDebounce, ...args);
  effect.isWrapped = true;
  return effect;
}

export function retry(...args) {
  const effect = wrapEffect(rawRetry, ...args);
  effect.isWrapped = true;
  return effect;
}

function unwrapEffect(effect) {
  if (effect?.isWrapped) {
    const { value } = effect.next();
    return value;
  }
  return effect;
}

function unwrapEffects(effects) {
  if (Array.isArray(effects)) {
    return effects.map(unwrapEffect);
  }
  const result = {};
  for (const [key, value] of Object.entries(effects)) {
    result[key] = unwrapEffect(value);
  }
  return result;
}

export function all(effects) {
  const effect = wrapEffect(rawAll, unwrapEffects(effects));
  effect.isWrapped = true;
  return effect;
}

export function race(effects) {
  const effect = wrapEffect(rawRace, unwrapEffects(effects));
  effect.isWrapped = true;
  return effect;
}
