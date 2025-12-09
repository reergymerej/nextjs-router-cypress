"use client";

import {
  useRouter as useNextRouter,
} from "next/navigation";

export type UseRouter = typeof useNextRouter;
let _useRouter: UseRouter | undefined;

export const useRouterSeam = (useRouter: UseRouter) => {
  _useRouter = useRouter;
};

export const useRouter = () => {
  if (!_useRouter) {
    // assign lazily to support last minute swapping in tests
    _useRouter = useNextRouter;
  }
  return _useRouter();
};
