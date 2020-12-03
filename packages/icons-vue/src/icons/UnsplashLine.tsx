// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UnsplashLineSvg from '@airclass/icons-svg/lib/asn/UnsplashLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnsplashLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnsplashLineSvg}></AntdIcon>;
};

UnsplashLine.displayName = 'UnsplashLine';
UnsplashLine.inheritAttrs = false;
export default UnsplashLine;