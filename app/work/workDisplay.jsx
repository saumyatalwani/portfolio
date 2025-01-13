'use client'
import Navbar from "@/components/custom/navbar"
import { Menu } from "lucide-react"
import { LayoutGrid } from "lucide-react"
import { useScreenSize } from "@/components/custom/useScreenSize"
import { useEffect, useState } from "react"
import clsx from "clsx"
import Image from "next/image"

import { useRouter } from "next/navigation"



export default function Display(props){

    const {data} = props;

    const [posts,setPosts] = useState(data);

    const router = useRouter();

    const handleRowClick = (slug) => {
        router.push(`/work/${slug}`); // Navigate to the desired page
    };

    const size = useScreenSize();
    const [view,setView]= useState('');
   
    useEffect(()=>{
        if(size=='xs' || size=='sm')
            setView('gallery')
        else
            setView('list')
    },[size])
    const [filter,setFilter]=useState('all');

    useEffect(()=>{
        if(filter!='all')
            setPosts(data.filter((post)=>post.node.subtitle.toLowerCase().includes(filter)))
        else
            setPosts(data)
    },[filter])

    return (
        <div>
            <div className="mb-20">
                <Navbar/>
                
                <div className="pt-[9vh] md:pt-[18vh] px-[6vw] md:px-[18vw]">
                    <h1 className="text-4xl md:text-[5rem] leading-none font-saumyaSans font-[450] max-w-[75vw] md:max-w-[50vw]">Creating next level digital products</h1>

                    <div className="flex w-[88vw] md:w-[64vw] mt-5">
                        <div className={clsx("font-saumyaSans text-sm rounded-[4rem] p-5 w-[8rem] flex justify-center items-center my-10 cursor-pointer mr-2 md:mr-5",
                        filter!='all' && 'border-[#d7d7d8] border-[1px] hover:bg-[#455ce9] hover:text-white',
                        filter == 'all' && 'bg-black text-white')}
                        onClick={()=>setFilter('all')}>
                            All
                        </div>
                        <div className={clsx("font-saumyaSans text-sm rounded-[4rem] p-5 w-[16rem] md:w-[12rem] flex justify-center items-center my-10 cursor-pointer mr-2 md:mr-5",
                        filter!='design' && 'border-[#d7d7d8] border-[1px] hover:bg-[#455ce9] hover:text-white',
                        filter == 'design' && 'bg-black text-white')}
                        onClick={()=>setFilter('design')}>
                            Design
                        </div>
                        <div className={clsx("font-saumyaSans text-sm rounded-[4rem] p-5 w-[16rem] flex justify-center items-center my-10 cursor-pointer",
                        filter!='development' && 'border-[#d7d7d8] border-[1px] hover:bg-[#455ce9] hover:text-white',
                        filter == 'development' && 'bg-black text-white')}
                        onClick={()=>setFilter('development')}>
                            Development
                        </div>

                        <div className="ml-auto hidden md:flex">
                            <div className={clsx("font-saumyaSans rounded-full p-5 flex justify-center items-center my-10 cursor-pointer mr-5 aspect-square",
                            view !='list' && "border-[1px] border-[#d7d7d8] hover:bg-[#455ce9] hover:text-white",
                            view == 'list' && 'bg-black text-white')}
                            onClick={()=>setView('list')}>
                                <Menu className="size-5" strokeWidth={1}/>
                            </div>
                            <div className={clsx("font-saumyaSans rounded-full p-5 flex justify-center items-center my-10 cursor-pointer mr-5 aspect-square",
                            view!='gallery' && "border-[1px] border-[#d7d7d8] hover:bg-[#455ce9] hover:text-white",
                            view == 'gallery' && 'bg-black text-white')}
                            onClick={()=>setView('gallery')}>
                                <LayoutGrid className="size-5" strokeWidth={1}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={clsx(view=='list' && "px-[9vw] md:px-[18vw]",view=='gallery' && "px-[6vw]",'w-screen')}>

                    {
                        
                    view == 'list' ?

                    <div className="w-[64vw] mt-5 font-saumyaSans">
                        <table className="workTable">
                            <thead>
                            <tr>
                                <th className="min-w-[25vw]">Project</th>
                                <th className="min-w-[8vw]">Location</th>
                                <th className="min-w-[30vw]">Service</th>
                                <th className="min-w-[6vw]">Year</th>
                            </tr>
                            </thead>
                            <tbody>
                            {posts.map((post,index)=>{
                                let props = post.node.subtitle.split(",")
                                return (
                                    
                                    <tr key={index} onClick={() => handleRowClick(post.node.slug)} className="cursor-pointer">
                                        <td>{post.node.title}</td>
                                        <td>{props[0]}</td>
                                        <td>{props[1]}</td>
                                        <td>{props[2]}</td>
                                    </tr>
                                   
                                    
                                )
                            })}
                            
                            </tbody>
                        </table>
                    </div>  : null }
                {
                    view == 'gallery' ?
                    <div className="w-[88vw] mt-5 font-saumyaSans">
                        <div className="flex flex-wrap gallery justify-center items-center" >

                            {posts.map((post,index)=>{
                                let props = post.node.subtitle.split(",")
                                let img = post.node.coverImage.url.toString()

                                return (
                                    <div className="mt-20 md:mr-10 cursor-pointer" key={index} onClick={()=>handleRowClick(post.node.slug)}>
                                    
                                        <div className="bg-[#ededed] h-[60vh] px-5 md:px-10 flex justify-center items-center mb-5">
                                            <Image src={img} height={800} width={800} className="w-[70vw] md:w-[30vw]" alt='Project Cover'/>
                                        </div>
                                        <h1 className="text-4xl font-saumyaSans font-medium">{post.node.title}</h1>
                                        <hr className="text-[#1c1d20] mt-5"/>
                                        <div className="font-noto font-light flex mt-5">
                                            <h2>{props[1]}</h2>
                                            <h2 className="ml-auto">{props[2]}</h2>
                                        </div>  
                                    </div>)
                            })}
                        </div>
                    </div> : null
                }
                </div>
            </div>
        </div>
    )
}