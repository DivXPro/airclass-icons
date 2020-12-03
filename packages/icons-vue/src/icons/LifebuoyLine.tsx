// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LifebuoyLineSvg from '@airclass/icons-svg/lib/asn/LifebuoyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LifebuoyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LifebuoyLineSvg}></AntdIcon>;
};

LifebuoyLine.displayName = 'LifebuoyLine';
LifebuoyLine.inheritAttrs = false;
export default LifebuoyLine;