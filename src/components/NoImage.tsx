import React from 'react';
import {TThumbRatio} from 'boundless-api-client';
import clsx from 'clsx';

export default function NoImage({ratio, className, classNameBg}: {ratio: TThumbRatio, className?: string, classNameBg?: string}) {
  return (
    <div className={clsx(`no-image r-${ratio}`, className)}>
      <div className={clsx('no-image__bg', classNameBg)}></div>
    </div>
  );
}