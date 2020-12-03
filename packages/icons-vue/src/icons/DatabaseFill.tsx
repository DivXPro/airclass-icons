// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DatabaseFillSvg from '@airclass/icons-svg/lib/asn/DatabaseFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DatabaseFillSvg}></AntdIcon>;
};

DatabaseFill.displayName = 'DatabaseFill';
DatabaseFill.inheritAttrs = false;
export default DatabaseFill;