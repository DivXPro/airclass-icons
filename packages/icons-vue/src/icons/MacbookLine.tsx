// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MacbookLineSvg from '@airclass/icons-svg/lib/asn/MacbookLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MacbookLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MacbookLineSvg}></AntdIcon>;
};

MacbookLine.displayName = 'MacbookLine';
MacbookLine.inheritAttrs = false;
export default MacbookLine;