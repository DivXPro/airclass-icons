// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LightbulbFlashLineSvg from '@airclass/icons-svg/lib/asn/LightbulbFlashLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LightbulbFlashLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LightbulbFlashLineSvg}></AntdIcon>;
};

LightbulbFlashLine.displayName = 'LightbulbFlashLine';
LightbulbFlashLine.inheritAttrs = false;
export default LightbulbFlashLine;