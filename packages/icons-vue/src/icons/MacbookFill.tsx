// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MacbookFillSvg from '@airclass/icons-svg/lib/asn/MacbookFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MacbookFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MacbookFillSvg}></AntdIcon>;
};

MacbookFill.displayName = 'MacbookFill';
MacbookFill.inheritAttrs = false;
export default MacbookFill;