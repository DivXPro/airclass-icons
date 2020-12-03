// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoonCloudyLineSvg from '@airclass/icons-svg/lib/asn/MoonCloudyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonCloudyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonCloudyLineSvg}></AntdIcon>;
};

MoonCloudyLine.displayName = 'MoonCloudyLine';
MoonCloudyLine.inheritAttrs = false;
export default MoonCloudyLine;