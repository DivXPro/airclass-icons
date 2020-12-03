// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SdCardLineSvg from '@airclass/icons-svg/lib/asn/SdCardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SdCardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SdCardLineSvg}></AntdIcon>;
};

SdCardLine.displayName = 'SdCardLine';
SdCardLine.inheritAttrs = false;
export default SdCardLine;