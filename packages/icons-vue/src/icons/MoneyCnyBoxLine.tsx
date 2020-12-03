// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoneyCnyBoxLineSvg from '@airclass/icons-svg/lib/asn/MoneyCnyBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoneyCnyBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyCnyBoxLineSvg}></AntdIcon>;
};

MoneyCnyBoxLine.displayName = 'MoneyCnyBoxLine';
MoneyCnyBoxLine.inheritAttrs = false;
export default MoneyCnyBoxLine;