// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UnsplashFillSvg from '@airclass/icons-svg/lib/asn/UnsplashFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnsplashFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnsplashFillSvg}></AntdIcon>;
};

UnsplashFill.displayName = 'UnsplashFill';
UnsplashFill.inheritAttrs = false;
export default UnsplashFill;