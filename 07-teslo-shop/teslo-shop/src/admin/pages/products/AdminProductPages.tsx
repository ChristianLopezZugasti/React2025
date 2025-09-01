import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPages = () => {
  return (
    <>
      

      <div className="flex justify-between items-center">
      <AdminTitle  title="Productos" subtitle="Aqui  puedes ver y administrar tus productos"/>
       <div className="flex justify-end mb-10 gap-4">
      <Link to="/admin/products/new">
      <Button>
        <PlusIcon/>
          Nuevo Producto
      </Button>
      </Link>



      </div>
      </div>
      
      
      <Table className="bg-white p-10 shadow-xs border border-gray-200">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>tallas</TableHead>

            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-medium">
              <img src="https://placehold.co/250x250"
              alt="Product"
              className="w-20 h-20 object-cover rounded-md" 
              />
            </TableCell>

            <TableCell>Producto 1</TableCell>
            <TableCell>$250</TableCell>

            <TableCell>100 stock</TableCell>
            <TableCell>Categoria 1 </TableCell>
            <TableCell>XS,S,L</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/products/popo`}>
                Editar
              </Link>
              </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <CustomPagination totalPages={10} />
    
    </>
  )
}
