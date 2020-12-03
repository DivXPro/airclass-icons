// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TvFillSvg from '@airclass/icons-svg/lib/asn/TvFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TvFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TvFillSvg}></AntdIcon>;
};

TvFill.displayName = 'TvFill';
TvFill.inheritAttrs = false;
export default TvFill;