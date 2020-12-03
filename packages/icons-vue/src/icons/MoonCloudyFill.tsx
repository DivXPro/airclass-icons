// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoonCloudyFillSvg from '@airclass/icons-svg/lib/asn/MoonCloudyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoonCloudyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonCloudyFillSvg}></AntdIcon>;
};

MoonCloudyFill.displayName = 'MoonCloudyFill';
MoonCloudyFill.inheritAttrs = false;
export default MoonCloudyFill;