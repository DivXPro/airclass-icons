// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MacLineSvg from '@airclass/icons-svg/lib/asn/MacLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MacLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MacLineSvg}></AntdIcon>;
};

MacLine.displayName = 'MacLine';
MacLine.inheritAttrs = false;
export default MacLine;