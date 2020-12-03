// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TableFillSvg from '@airclass/icons-svg/lib/asn/TableFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TableFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TableFillSvg}></AntdIcon>;
};

TableFill.displayName = 'TableFill';
TableFill.inheritAttrs = false;
export default TableFill;