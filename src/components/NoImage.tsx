import React from 'react';
import {TThumbRatio} from 'boundless-api-client';
import clsx from 'clsx';

export default function NoImage({ratio, className, classNameBg, xs}: {ratio: TThumbRatio, className?: string, classNameBg?: string, xs?: boolean}) {
  return (
    <div className={clsx(`bdl-no-image r-${ratio}`, className)}>
      <div className={clsx('bdl-no-image__bg', {
				'bdl-no-image__bg_xs': xs
			}, classNameBg)}></div>
    </div>
  );
}