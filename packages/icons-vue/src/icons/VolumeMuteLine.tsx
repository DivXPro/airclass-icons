// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VolumeMuteLineSvg from '@airclass/icons-svg/lib/asn/VolumeMuteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeMuteLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeMuteLineSvg}></AntdIcon>;
};

VolumeMuteLine.displayName = 'VolumeMuteLine';
VolumeMuteLine.inheritAttrs = false;
export default VolumeMuteLine;