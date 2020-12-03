// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ListOrderedSvg from '@airclass/icons-svg/lib/asn/ListOrdered';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ListOrdered = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ListOrderedSvg}></AntdIcon>;
};

ListOrdered.displayName = 'ListOrdered';
ListOrdered.inheritAttrs = false;
export default ListOrdered;