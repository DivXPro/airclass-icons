// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LightbulbLineSvg from '@airclass/icons-svg/lib/asn/LightbulbLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LightbulbLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LightbulbLineSvg}></AntdIcon>;
};

LightbulbLine.displayName = 'LightbulbLine';
LightbulbLine.inheritAttrs = false;
export default LightbulbLine;