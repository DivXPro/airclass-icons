// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VolumeMuteFillSvg from '@airclass/icons-svg/lib/asn/VolumeMuteFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeMuteFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeMuteFillSvg}></AntdIcon>;
};

VolumeMuteFill.displayName = 'VolumeMuteFill';
VolumeMuteFill.inheritAttrs = false;
export default VolumeMuteFill;