// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LoaderFillSvg from '@airclass/icons-svg/lib/asn/LoaderFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoaderFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoaderFillSvg}></AntdIcon>;
};

LoaderFill.displayName = 'LoaderFill';
LoaderFill.inheritAttrs = false;
export default LoaderFill;