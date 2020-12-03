// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SunCloudyLineSvg from '@airclass/icons-svg/lib/asn/SunCloudyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunCloudyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunCloudyLineSvg}></AntdIcon>;
};

SunCloudyLine.displayName = 'SunCloudyLine';
SunCloudyLine.inheritAttrs = false;
export default SunCloudyLine;