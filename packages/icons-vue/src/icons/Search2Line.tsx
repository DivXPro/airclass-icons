// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Search2LineSvg from '@airclass/icons-svg/lib/asn/Search2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Search2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Search2LineSvg}></AntdIcon>;
};

Search2Line.displayName = 'Search2Line';
Search2Line.inheritAttrs = false;
export default Search2Line;