// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GovernmentLineSvg from '@airclass/icons-svg/lib/asn/GovernmentLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GovernmentLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GovernmentLineSvg}></AntdIcon>;
};

GovernmentLine.displayName = 'GovernmentLine';
GovernmentLine.inheritAttrs = false;
export default GovernmentLine;