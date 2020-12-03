// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PoliceCarLineSvg from '@airclass/icons-svg/lib/asn/PoliceCarLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PoliceCarLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PoliceCarLineSvg}></AntdIcon>;
};

PoliceCarLine.displayName = 'PoliceCarLine';
PoliceCarLine.inheritAttrs = false;
export default PoliceCarLine;