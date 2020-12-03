// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GenderlessLineSvg from '@airclass/icons-svg/lib/asn/GenderlessLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GenderlessLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GenderlessLineSvg}></AntdIcon>;
};

GenderlessLine.displayName = 'GenderlessLine';
GenderlessLine.inheritAttrs = false;
export default GenderlessLine;