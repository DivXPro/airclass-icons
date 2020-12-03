// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TableAltLineSvg from '@airclass/icons-svg/lib/asn/TableAltLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TableAltLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TableAltLineSvg}></AntdIcon>;
};

TableAltLine.displayName = 'TableAltLine';
TableAltLine.inheritAttrs = false;
export default TableAltLine;